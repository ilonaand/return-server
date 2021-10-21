import Router from 'express';
import { findAll } from './controller';

const router = Router();

router.get('/sellbills', findAll);

export default router;