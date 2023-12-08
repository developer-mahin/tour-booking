import { Router } from 'express';
import { userRouter } from './user.route';
import { tourRouter } from './tour.route';
import { reviewRoutes } from './review.route';
import { bookingRouter } from './booking.route';

const router = Router();

const routes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/tours',
    route: tourRouter,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/bookings',
    route: bookingRouter,
  },
];

routes.forEach((item) => {
  router.use(item.path, item.route);
});

export const globalRouter = router;
