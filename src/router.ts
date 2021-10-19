import Router from 'express';
import { getSellBills } from './selectController';

const router = Router();

router.get('/v1/sellbills', getSellBills);

export default router;