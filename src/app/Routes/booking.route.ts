import express from 'express';
import { bookingController } from '../Controllers/booking.controller';
const router = express.Router();

router.post('/create-booking', bookingController.createBooking);
router.get('/', bookingController.findAllBooking);
router.get('/:id', bookingController.findSingleBooking);
router.patch('/update/:id', bookingController.updateBookingData);
router.delete('/delete/:id', bookingController.deleteBookingData);
router.get('/:id/bookings-for-user', bookingController.bookingForAUser);

export const bookingRouter = router;
