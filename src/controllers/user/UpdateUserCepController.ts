import { Request, Response } from 'express';
import { UserUpdateCepService } from '../../services/user/UserUpdateCepService';

class UpdateUserCepController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { cep } = req.body;

    const updateUserService = new UserUpdateCepService();

    const userUpdated = await updateUserService.execute({
      user_id,
      cep,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserCepController }