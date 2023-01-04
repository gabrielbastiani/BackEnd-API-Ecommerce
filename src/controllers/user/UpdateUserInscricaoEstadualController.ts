import { Request, Response } from 'express';
import { UserUpdateInscricaoEstadualService } from '../../services/user/UserUpdateInscricaoEstadualService';

class UpdateUserInscricaoEstadualController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { inscricaoEstadual } = req.body;

    const updateUserService = new UserUpdateInscricaoEstadualService();

    const userUpdated = await updateUserService.execute({
      user_id,
      inscricaoEstadual,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserInscricaoEstadualController }