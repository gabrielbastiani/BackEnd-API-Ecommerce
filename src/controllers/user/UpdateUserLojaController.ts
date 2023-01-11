import { Request, Response } from 'express';
import { UserUpdateLojaService } from '../../services/user/UserUpdateLojaService';

class UpdateUserLojaController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { loja_id } = req.body;

    const updateUserService = new UserUpdateLojaService();

    const userUpdated = await updateUserService.execute({
      user_id,
      loja_id,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserLojaController }