import { Request, Response } from 'express';
import { UserUpdateNumeroService } from '../../services/user/UserUpdateNumeroService';

class UpdateUserNumeroController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { numero } = req.body;

    const updateUserService = new UserUpdateNumeroService();

    const userUpdated = await updateUserService.execute({
      user_id,
      numero,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserNumeroController }