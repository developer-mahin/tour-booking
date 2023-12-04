import Tour from '../Models/tour.model';
import ITour from '../interfaces/tour.interface';

const saveTourInDB = async (tourData: ITour): Promise<ITour | null> => {
  const result = await Tour.create(tourData);
  return result;
};

const findAllTour = async (): Promise<ITour[] | null> => {
  const result = await Tour.find({});
  // const result = await Tour.aggregate([{ $match: {} }]);
  return result;
};

const findATour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id);
  return result;
};

const updateTour = async (
  id: string,
  updatedData: ITour,
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findOneAndDelete({ _id: id });
  return result;
};

export const tourServices = {
  saveTourInDB,
  findAllTour,
  findATour,
  updateTour,
  deleteTour,
};
