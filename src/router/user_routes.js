import { Router } from "express";
import * as register from '../controllers/register_controller'
import { upLoadsProfile } from "../helpers/multer";


const router = Router();

router.post('/register-client', upLoadsProfile.single('image'), register.registerClient);
router.post('/register-delivery',  upLoadsProfile.single('image') , register.registerDelivery );

export default router;