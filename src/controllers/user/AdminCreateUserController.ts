import { Request, Response } from 'express'
import { AdminCreateUserService } from '../../services/user/AdminCreateUserService'

class AdminCreateUserController {
  async handle(req: Request, res: Response) {
    const { nameComplete, email, password, loja_id } = req.body;

    const adminCreateUserService = new AdminCreateUserService();

    const user = await adminCreateUserService.execute({
      nameComplete,
      email,
      password,
      loja_id
    });

    return res.json(user)
  }
}

export { AdminCreateUserController }