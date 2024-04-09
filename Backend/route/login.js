import { Router } from 'express';
import userController from '../Controller/userController';
const router = Router();

router.get('/', userController.show);
router.post('/', userController.login);

export default loginRouter;