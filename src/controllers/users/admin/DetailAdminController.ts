import { Request, Response } from 'express'
import { DetailAdminService } from '../../../services/users/admin/DetailAdminService';

class DetailAdminController {
  async handle(req: Request, res: Response) {

    const admin_id = req.query.admin_id as string;

    const detailAdmin = new DetailAdminService();

    const admin = await detailAdmin.execute({ admin_id });

    return res.json(admin);

  }
}

export { DetailAdminController }