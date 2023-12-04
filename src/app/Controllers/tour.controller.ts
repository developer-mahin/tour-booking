import { NextFunction, Request, Response } from 'express';
import { tourServices } from '../Services/tour.service';

const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tourData = req.body;
    const result = await tourServices.saveTourInDB(tourData);
    res.status(201).json({
      success: true,
      message: 'successfully created the tour data',
      data: result,
    });
  } catch (error) {
    let errorMessage = {};
    if (error instanceof Error) {
      errorMessage = error;
      next(errorMessage);
    }
  }
};

const findAllTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tourServices.findAllTour();
    res.status(200).json({
      success: true,
      message: 'successfully get all data',
      data: result,
    });
  } catch (error) {
    let errorMessage = {};
    if (error instanceof Error) {
      errorMessage = error;
      next(errorMessage);
    }
  }
};

const findSingleTour = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await tourServices.findATour(id);
    res.status(200).json({
      success: true,
      message: 'successfully get a single data',
      data: result,
    });
  } catch (error) {
    let errorMessage = {};
    if (error instanceof Error) {
      errorMessage = error;
      next(errorMessage);
    }
  }
};

const updateTourData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updatedDoc = req.body;
    const result = await tourServices.updateTour(id, updatedDoc);
    res.status(200).json({
      success: true,
      message: 'successfully updated tour data',
      data: result,
    });
  } catch (error) {
    let errorMessage = {};
    if (error instanceof Error) {
      errorMessage = error;
      next(errorMessage);
    }
  }
};

const deleteTourData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await tourServices.deleteTour(id);
    res.status(200).json({
      success: true,
      message: 'successfully delete the tour',
      data: result,
    });
  } catch (error) {
    let errorMessage = {};
    if (error instanceof Error) {
      errorMessage = error;
      next(errorMessage);
    }
  }
};

export const tourController = {
  createTour,
  findAllTour,
  findSingleTour,
  updateTourData,
  deleteTourData,
};
