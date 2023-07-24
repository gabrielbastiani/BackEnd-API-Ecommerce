import { Request, Response } from 'express'
import { EmployeCreateService } from '../../../services/users/admin/EmployeCreateService';

class EmployeCreateController {
  async handle(req: Request, res: Response) {
    const { name, slug, email, password } = req.body;

    const adminCreateUserService = new EmployeCreateService();

    const admin = await adminCreateUserService.execute({
      name,
      slug,
      email,
      password
    });

    return res.json(admin)
  }
}

export { EmployeCreateController }