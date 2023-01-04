import { Request, Response } from 'express';
import { UserUpdateNomeDoRecebedorService } from '../../services/user/UserUpdateNomeDoRecebedorService';

class UpdateUserNomeDoRecebedorController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { nomeDoRecebedor } = req.body;

    const updateUserService = new UserUpdateNomeDoRecebedorService();

    const userUpdated = await updateUserService.execute({
      user_id,
      nomeDoRecebedor,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserNomeDoRecebedorController }