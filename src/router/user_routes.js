import { Router } from 'express';
import * as register from '../controllers/register_controller'
import { upLoadsProfile } from '../helpers/multer';
import { verifyToken } from '../middleware/validateToken';


const router = Router();

router.post('/register-client', upLoadsProfile.single('imagePath'), register.registerClient);
router.post('/register-delivery', [ verifyToken, upLoadsProfile.single('image') ], register.registerDelivery );

export default router;