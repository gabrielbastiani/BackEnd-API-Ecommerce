import { Request, Response } from 'express'
import { AdminCreateService } from '../../../services/users/admin/AdminCreateService';

class AdminCreateController {
  async handle(req: Request, res: Response) {
    const { name, slug, email, password, store_id } = req.body;

    const adminCreateUserService = new AdminCreateService();

    const admin = await adminCreateUserService.execute({
      name,
      slug,
      email,
      password,
      store_id
    });

    return res.json(admin)
  }
}

export { AdminCreateController }