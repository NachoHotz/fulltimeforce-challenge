import { Router } from 'express';

import * as controller from '../controllers/basicController.controller';

import githubRoutes from './github.route';

const router = Router();

router.get('/', controller.basicController);

router.use('/github', githubRoutes);

export default router;
