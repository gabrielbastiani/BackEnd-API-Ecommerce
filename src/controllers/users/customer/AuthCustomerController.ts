import { Request, Response } from 'express';
import { AuthCustomerService } from '../../../services/users/customer/AuthCustomerService';

class AuthCustomerController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthCustomerService();

    const auth = await authUserService.execute({
      email,
      password,
    })

    return res.json(auth);

  }
}

export { AuthCustomerController }