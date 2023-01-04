import { Request, Response } from 'express';
import { UserUpdatePhoneService } from '../../services/user/UserUpdatePhoneService';

class UpdateUserPhoneController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { phone } = req.body;

    const updateUserService = new UserUpdatePhoneService();

    const userUpdated = await updateUserService.execute({
      user_id,
      phone,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserPhoneController }