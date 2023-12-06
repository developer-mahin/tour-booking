import { userServices } from '../Services/user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const result = await userServices.saveUserInDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully created user',
    data: result,
  });
});

const findAllUser = catchAsync(async (req, res) => {
  const result = await userServices.findAllUser();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully get all user',
    data: result,
  });
});

const findSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.findAUser(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully get a single user',
    data: result,
  });
});

const updateUserData = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.updateUser(id, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully update user',
    data: result,
  });
});

const deleteUserData = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.deleteUser(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'successfully delete user',
    data: result,
  });
});

export const userController = {
  createUser,
  findAllUser,
  findSingleUser,
  updateUserData,
  deleteUserData,
};
