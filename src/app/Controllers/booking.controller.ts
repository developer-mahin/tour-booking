import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookingServices } from '../Services/booking.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await bookingServices.saveBookingInDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully created user',
    data: result,
  });
});

const findAllBooking = catchAsync(async (req, res) => {
  const result = await bookingServices.findAllBooking();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully get all user',
    data: result,
  });
});

const findSingleBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookingServices.findABooking(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully get a single user',
    data: result,
  });
});

const updateBookingData = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookingServices.updateBooking(id, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully update user',
    data: result,
  });
});

const deleteBookingData = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookingServices.deleteBooking(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully delete user',
    data: result,
  });
});

const bookingForAUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookingServices.bookingForAUser(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully delete user',
    data: result,
  });
});

export const bookingController = {
  createBooking,
  findAllBooking,
  findSingleBooking,
  updateBookingData,
  deleteBookingData,
  bookingForAUser,
};
