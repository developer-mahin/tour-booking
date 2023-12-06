/* eslint-disable @typescript-eslint/no-explicit-any */
import { reviewServices } from '../Services/review.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createReview = catchAsync(async (req, res) => {
  const result = await reviewServices.createReview(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully created review',
    data: result,
  });
});

const getAllReviews = catchAsync(async (req, res) => {
  const result = await reviewServices.getAllReviews();
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully get all review',
    data: result,
  });
});

const getSingleReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServices.getSingleReview(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully a single review',
    data: result,
  });
});

const updateReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServices.updateReview(id, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'review update successful',
    data: result,
  });
});

const deleteReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  await reviewServices.deleteReview(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'review delete successful',
  });
});

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
