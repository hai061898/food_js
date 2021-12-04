import { Router } from 'express';
import { verifyToken } from '../middleware/validateToken';
import * as login from '../controllers/login_controller';

const router = Router();


router.post('/login-email-id', login.loginController);
router.get('/renew-token-login', verifyToken ,login.renewTokenLogin);



export default router;