import { Request, Response } from 'express'
import { AdminRoleEmployeeService } from '../../../services/users/admin/AdminRoleEmployeeService';

class AdminRoleEmployeeController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id as string;

    const employeRole = new AdminRoleEmployeeService();

    const admin = await employeRole.execute({
      admin_id
    });

    return res.json(admin);

  }
}

export { AdminRoleEmployeeController }