/* eslint-disable no-unused-vars */
import { Model, Schema } from 'mongoose';

interface IReview {
  review: string;
  rating: number;
  createAt: Date;
  tour: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

export interface IReviewModel extends Model<IReview> {
  calcAverageRatings(tourId: Schema.Types.ObjectId): Promise<void>;
}

export default IReview;
