import mongoose from 'mongoose';
import Booking from '../Models/booking.model';
import Tour from '../Models/tour.model';
import { IBooking } from '../interfaces/booking.interface';
import CreateError from '../errors/createError';

const saveBookingInDB = async (payload: IBooking) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const booking = await Booking.create([payload], { session });
    if (!booking) {
      throw new CreateError(400, "Booking didn't created");
    }

    const tour = await Tour.findByIdAndUpdate(booking[0].tour, {
      $inc: { availableSeats: -booking[0].bookedSlots },
    });

    if (!tour) {
      throw new CreateError(400, "Tour didn't updated!");
    }

    await session.commitTransaction();
    await session.endSession();
    return booking;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

const findAllBooking = async (): Promise<IBooking[] | null> => {
  const result = await Booking.aggregate([{ $match: {} }]);
  return result;
};

const findABooking = async (id: string) => {
  const result = await Booking.findById(id);
  return result;
};

const updateBooking = async (id: string, updatedData: IBooking) => {
  const result = await Booking.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBooking = async (id: string) => {
  const result = await Booking.findOneAndDelete({ _id: id });
  return result;
};

const bookingForAUser = async (id: string) => {
  const result = await Booking.findOneAndDelete({ _id: id });
  return result;
};

export const bookingServices = {
  saveBookingInDB,
  findAllBooking,
  findABooking,
  updateBooking,
  deleteBooking,
  bookingForAUser,
};
