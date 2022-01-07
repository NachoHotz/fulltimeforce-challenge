import { Router } from 'express';

import getCommitsController from '../controllers/github.controller';

const router = Router();

router.get('/', getCommitsController);

export default router;
