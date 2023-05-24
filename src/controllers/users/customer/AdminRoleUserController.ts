import { Request, Response } from 'express'
import { AdminRoleUserService } from '../../services/user/AdminRoleUserService'

class AdminRoleUserController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id as string;

    const adminRoleUserService = new AdminRoleUserService();

    const user = await adminRoleUserService.execute({
      admin_id
    });

    return res.json(user);

  }
}

export { AdminRoleUserController }