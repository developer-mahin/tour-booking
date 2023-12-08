import { tourServices } from '../Services/tour.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { createTourValidationSchema } from '../Validations/tour.validation';

const createTour = catchAsync(async (req, res) => {
  const checkValidation = createTourValidationSchema.parse(req.body);
  const result = await tourServices.saveTourInDB(checkValidation);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully created tour',
    data: result,
  });
});

const findAllTour = catchAsync(async (req, res) => {
  const result = await tourServices.findAllTour();
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully created get all tours',
    data: result,
  });
});

const findSingleTour = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await tourServices.findATour(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully get a single tours',
    data: result,
  });
});

const updateTourData = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await tourServices.updateTour(id, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully update tours',
    data: result,
  });
});

const deleteTourData = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await tourServices.deleteTour(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully delete tours',
    data: result,
  });
});

const getNextSchedule = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await tourServices.getNextSchedule(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully get next schedule tours',
    data: result,
  });
});

export const tourController = {
  createTour,
  findAllTour,
  findSingleTour,
  updateTourData,
  deleteTourData,
  getNextSchedule,
};
