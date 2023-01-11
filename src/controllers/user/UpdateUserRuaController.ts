import { Request, Response } from 'express';
import { UserUpdateRuaService } from '../../services/user/UserUpdateRuaService';

class UpdateUserRuaController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { rua } = req.body;

    const updateUserService = new UserUpdateRuaService();

    const userUpdated = await updateUserService.execute({
      user_id,
      rua,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserRuaController }