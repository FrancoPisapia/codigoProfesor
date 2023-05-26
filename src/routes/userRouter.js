import { Router } from 'express';
import auth from "../middlewares/auth.js";
import { list, deleteOne, getOne, save, update } from "../controllers/userControllers.js";
import authorization from '../middlewares/authorizacion.js';


const userRouter = Router();

userRouter.get('/', auth, authorization('getUsers'), list);
userRouter.get('/:id',authorization('getUser'), getOne);
userRouter.post('/',save);
userRouter.put('/:id', authorization('updateUser'),update);
userRouter.delete('/:id', authorization('deleteUser'),deleteOne);

export default userRouter;