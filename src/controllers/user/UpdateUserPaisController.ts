import { Request, Response } from 'express';
import { UserUpdatePaisService } from '../../services/user/UserUpdatePaisService';

class UpdateUserPaisController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { pais } = req.body;

    const updateUserService = new UserUpdatePaisService();

    const userUpdated = await updateUserService.execute({
      user_id,
      pais,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserPaisController }