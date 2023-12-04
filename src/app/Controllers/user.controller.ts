import { NextFunction, Request, Response } from 'express';
import { userServices } from '../Services/user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await userServices.saveUserInDB(userData);
    res.status(201).json({
      success: true,
      message: 'successfully created the user data',
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

const findAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.findAllUser();
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

const findSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await userServices.findAUser(id);
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

const updateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updatedDoc = req.body;
    const result = await userServices.updateUser(id, updatedDoc);
    res.status(200).json({
      success: true,
      message: 'successfully updated user data',
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

const deleteUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await userServices.deleteUser(id);
    res.status(200).json({
      success: true,
      message: 'successfully delete the user',
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

export const userController = {
  createUser,
  findAllUser,
  findSingleUser,
  updateUserData,
  deleteUserData,
};
