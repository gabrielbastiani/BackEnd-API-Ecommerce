import { Request, Response } from 'express';
import { UserUpdateCnpjService } from '../../services/user/UserUpdateCnpjService';

class UpdateUserCnpjController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { cnpj } = req.body;

    const updateUserService = new UserUpdateCnpjService();

    const userUpdated = await updateUserService.execute({
      user_id,
      cnpj,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserCnpjController }