import { Request, Response } from 'express';
import { UserUpdateEstadoService } from '../../services/user/UserUpdateEstadoService';

class UpdateUserEstadoController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { state } = req.body;

    const updateUserService = new UserUpdateEstadoService();

    const userUpdated = await updateUserService.execute({
      user_id,
      state,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserEstadoController }