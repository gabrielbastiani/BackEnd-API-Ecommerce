import { Request, Response } from 'express';
import { UserUpdateComplementoService } from '../../services/user/UserUpdateComplementoService';

class UpdateUserComplementoController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { complemento } = req.body;

    const updateUserService = new UserUpdateComplementoService();

    const userUpdated = await updateUserService.execute({
      user_id,
      complemento,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserComplementoController }