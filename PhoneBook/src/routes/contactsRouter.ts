import { Router } from 'express';

import { contactsController } from '../controllers/ContactsController';

const contactsRouter = Router();

contactsRouter.get('/list', contactsController.list);
contactsRouter.post('/create', contactsController.create);
contactsRouter.delete('/:id', contactsController.remove);
contactsRouter.put('/:id', contactsController.update);

export default contactsRouter;
