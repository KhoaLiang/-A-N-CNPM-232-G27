import { Router } from 'express';
import userController from '../Controller/userController.js';
const router = Router();

router.get('/', userController.logout);


export default logoutRouter;