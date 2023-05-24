import { Request, Response } from 'express'
import { AdminRoleUserService } from '../../services/user/AdminRoleUserService'

class AdminRoleUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string;

    const adminRoleUserService = new AdminRoleUserService();

    const user = await adminRoleUserService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { AdminRoleUserController }