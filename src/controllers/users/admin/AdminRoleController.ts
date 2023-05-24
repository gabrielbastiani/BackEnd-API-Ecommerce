import { Request, Response } from 'express'
import { AdminRoleService } from '../../../services/users/admin/AdminRoleService';

class AdminRoleController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id as string;

    const adminRole = new AdminRoleService();

    const admin = await adminRole.execute({
      admin_id
    });

    return res.json(admin);

  }
}

export { AdminRoleController }