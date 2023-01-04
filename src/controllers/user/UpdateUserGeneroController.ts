import { Request, Response } from 'express';
import { UserUpdateGeneroService } from '../../services/user/UserUpdateGeneroService';

class UpdateUserGeneroController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { genero } = req.body;

    const updateUserService = new UserUpdateGeneroService();

    const userUpdated = await updateUserService.execute({
      user_id,
      genero,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserGeneroController }