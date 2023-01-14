import { Request, Response } from 'express';
import { AuthAdminService } from '../../services/user/AuthAdminService'

class AuthAdminController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authAdminService = new AuthAdminService();

    const auth = await authAdminService.execute({
      email,
      password,
    })

    return res.json(auth);

  }
}

export { AuthAdminController }