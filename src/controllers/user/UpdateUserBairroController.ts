import { Request, Response } from 'express';
import { UserUpdateBairroService } from '../../services/user/UserUpdateBairroService';

class UpdateUserBairroController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { bairro } = req.body;

    const updateUserService = new UserUpdateBairroService();

    const userUpdated = await updateUserService.execute({
      user_id,
      bairro,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserBairroController }