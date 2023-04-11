import { Router } from 'express';
import SkillController from '../controllers/skill_controller';
const router = Router();

router.get('/kinang', SkillController.index);

export default router;
