import { Router } from 'express';
import settingController from '../Controller/settingController.js';
import isLoggedIn from '../Controller/isloginController.js';
const router = Router();

router.get('/', isLoggedIn(), settingController.show);
router.get('/offEnergy', isLoggedIn(), settingController.offEnergy);
router.post('/updateProfile', isLoggedIn(), settingController.updateProfile);
router.post('/changeMyHome', isLoggedIn(), settingController.changeMyHome);

export default settingRouter;