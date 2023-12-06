import { Router } from 'express';
import { userRouter } from './user.route';
import { tourRouter } from './tour.route';
import { reviewRoutes } from './review.route';

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
];

routes.forEach((item) => {
  router.use(item.path, item.route);
});

export const globalRouter = router;
