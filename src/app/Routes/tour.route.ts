import express from 'express';
import { tourController } from '../Controllers/tour.controller';
const router = express.Router();

router.post('/create-tour', tourController.createTour);
router.get('/', tourController.findAllTour);
router.get('/:id', tourController.findSingleTour);
router.patch('/update/:id', tourController.updateTourData);
router.delete('/delete/:id', tourController.deleteTourData);
router.get('/:id/next-schedule', tourController.getNextSchedule);

export const tourRouter = router;
