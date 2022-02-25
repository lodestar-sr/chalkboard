import { Router } from 'express';

import { authController } from '../controllers/AuthController';
import { authenticate } from '../middlewares/authentication.middleware';

const authRouter = Router();

authRouter.post('/signin', authController.login);
authRouter.post('/signup', authController.register);
authRouter.post('/refresh', authController.refresh);
authRouter.get('/me', authenticate, authController.fetchMe);

export default authRouter;
