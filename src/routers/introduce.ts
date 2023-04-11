import { Router } from 'express';
import IntroduceController from '../controllers/introduce_controller';
const router = Router();

router.get('/gioithieu', IntroduceController.index);

export default router;
