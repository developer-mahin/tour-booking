import { Schema, model } from 'mongoose';
import ITour, { ITourMethods, TTourModel } from '../interfaces/tour.interface';
import slugify from 'slugify';

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
  {
    name: {
      type: String,
      required: [true, 'The tour name is required.'],
    },
    durationHours: {
      type: Number,
      required: [true, 'The duration in hours is required.'],
    },
    ratingAverage: {
      type: Number,
      required: [true, 'The average rating is required.'],
    },
    ratingQuantity: {
      type: Number,
      required: [true, 'The rating quantity is required.'],
    },
    price: {
      type: Number,
      required: [true, 'The price is required.'],
    },
    imageCover: {
      type: String,
      required: [true, 'The image cover is required.'],
    },
    createdAt: {
      type: Date,
      required: [true, 'The creation date is required.'],
      default: Date.now(),
    },
    startDates: {
      type: [Date],
      required: [true, 'At least one start date is required.'],
    },
    startLocation: {
      type: String,
      required: [true, 'The start location is required.'],
    },
    availableSeats: {
      type: Number,
      required: [true, 'At least one location is required.'],
    },
    location: {
      type: [String],
      required: [true, 'At least one location is required.'],
    },
    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// add virtual duration days
tourSchema.virtual('durationDays').get(function () {
  return this.durationHours / 24;
});

// pre middleware
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.methods.getNextNearestStartDateAndEndDate = function (): {
  nearestStartDate: Date | null;
  estimatedEndDate: Date | null;
} {
  const today = new Date();
  const futureDates = this.startDates.filter((startDate: Date) => {
    return startDate > today;
  });

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime());

  const nearestStartDate = futureDates[0];
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  );

  return {
    nearestStartDate,
    estimatedEndDate,
  };
};

const Tour = model<ITour, TTourModel>('Tour', tourSchema);
export default Tour;
