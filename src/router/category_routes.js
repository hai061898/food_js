import { Router } from 'express';
import * as category from '../controllers/category_controller';
import { getAllDelivery } from '../controllers/delivery_controller';
import { verifyToken } from '../middleware/validateToken';

const router = Router();


router.post('/add-categories', verifyToken, category.addCategories);
router.get('/get-all-categories', verifyToken, category.getAllCategories );
router.get('/get-all-delivery', verifyToken, getAllDelivery);

export default router;