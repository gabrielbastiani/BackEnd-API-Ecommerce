import { Request, Response } from 'express';
import { UserUpdateAdressService } from '../../services/user/UserUpdateAdressService';

class UpdateUserAdressController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { address } = req.body;

    const updateUserService = new UserUpdateAdressService();

    const userUpdated = await updateUserService.execute({
      user_id,
      address,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserAdressController }