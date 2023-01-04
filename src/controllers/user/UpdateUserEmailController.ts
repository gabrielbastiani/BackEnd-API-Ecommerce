import { Request, Response } from 'express';
import { UserUpdateEmailService } from '../../services/user/UserUpdateEmailService';

class UpdateUserEmailController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { email } = req.body;

    const updateUserService = new UserUpdateEmailService();

    const userUpdated = await updateUserService.execute({
      user_id,
      email,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserEmailController }