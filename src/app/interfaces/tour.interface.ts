import { Model } from 'mongoose';

interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  ratingQuantity: number;
  price: number;
  imageCover: string;
  images?: string[];
  createdAt: Date;
  availableSeats: number;
  startDates: Date[];
  startLocation: string;
  location: string[];
  slug?: string;
}

export interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null;
    estimatedEndDate: Date | null;
  };
}

export type TTourModel = Model<ITour, Record<string, unknown>, ITourMethods>;

export default ITour;
