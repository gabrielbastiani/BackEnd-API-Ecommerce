import { Request, Response } from 'express';
import { UserUpdateDataDeNascimentoService } from '../../services/user/UserUpdateDataDeNascimentoService';

class UpdateUserDataDeNascimentoController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { dataNascimento } = req.body;

    const updateUserService = new UserUpdateDataDeNascimentoService();

    const userUpdated = await updateUserService.execute({
      user_id,
      dataNascimento,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserDataDeNascimentoController }