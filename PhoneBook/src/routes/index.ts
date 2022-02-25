import { Router } from 'express';

import authRouter from '../routes/authRouter';
import contactsRouter from './contactsRouter';
import { authenticate } from '../middlewares/authentication.middleware';

const router = Router();

router.use('/auth', authRouter);
router.use('/contacts', authenticate, contactsRouter);

export default router;
