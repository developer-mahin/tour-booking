import express from 'express';
import { userController } from '../Controllers/user.controller';
const router = express.Router();

router.post('/create-user', userController.createUser);
router.get('/', userController.findAllUser);
router.get('/:id', userController.findSingleUser);
router.patch('/update/:id', userController.updateUserData);
router.delete('/delete/:id', userController.deleteUserData);

export const userRouter = router;
