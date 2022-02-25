import { Request, Response, NextFunction } from 'express';

import ContactsService from '../services/ContactsService';
import { ResponseStatus } from '../shared/constants/global.constants';

export class ContactsController {
  private contactsService: ContactsService;

  constructor() {
    this.contactsService = new ContactsService();
  }

  public list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.contactsService.list(req.query);

      res.json({
        status: ResponseStatus.SUCCESS,
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contact = await this.contactsService.create(req.body);

      res.status(201).json({
        status: ResponseStatus.SUCCESS,
        data: contact,
      });
    } catch (err) {
      next(err);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.contactsService.update(+id, req.body);
      res.json({
        status: ResponseStatus.SUCCESS,
        data: result
      });
    } catch  (err) {
      next(err);
    }
  };

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.contactsService.remove(+id);
      if (result.affected === 1) {
        res.json({
          status: ResponseStatus.SUCCESS,
        });
      } else {
        res.json({
          status: ResponseStatus.FAILED,
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

export const contactsController = new ContactsController();
