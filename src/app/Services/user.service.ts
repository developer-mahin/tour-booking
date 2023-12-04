import User from '../Models/user.model';
import IUser from '../interfaces/user.interface';

const saveUserInDB = async (userData: IUser): Promise<IUser | null> => {
  const result = await User.create(userData);
  return result;
};

const findAllUser = async (): Promise<IUser[] | null> => {
  // const result = await User.find({});
  const result = await User.aggregate([{ $match: {} }]);
  return result;
};

const findAUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (
  id: string,
  updatedData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findOneAndDelete({ _id: id });
  return result;
};

export const userServices = {
  saveUserInDB,
  findAllUser,
  findAUser,
  updateUser,
  deleteUser,
};
