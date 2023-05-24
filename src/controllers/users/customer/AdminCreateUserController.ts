import { Request, Response } from 'express'
import { AdminCreateUserService } from '../../services/user/AdminCreateUserService'

class AdminCreateUserController {
  async handle(req: Request, res: Response) {
    const { nameComplete, slug, email, password, store_id } = req.body;

    const adminCreateUserService = new AdminCreateUserService();

    const user = await adminCreateUserService.execute({
      nameComplete,
      slug,
      email,
      password,
      store_id
    });

    return res.json(user)
  }
}

export { AdminCreateUserController }