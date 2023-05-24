import {Request, Response} from 'express'
import { ActiveOrDesactiveAdminService } from '../../../services/users/admin/ActiveOrDesactiveAdminService';

class ActiveOrDesactiveAdminController {
  async handle(req: Request, res: Response){
    const admin_id = req.query.admin_id as string;

    const activeAdmin = new ActiveOrDesactiveAdminService();

    const user = await activeAdmin.execute({
      admin_id
    });

    return res.json(user);

  }
}

export { ActiveOrDesactiveAdminController }