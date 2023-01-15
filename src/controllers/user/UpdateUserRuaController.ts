import { Request, Response } from 'express';
import { UserUpdateRuaService } from '../../services/user/UserUpdateRuaService';

class UpdateUserRuaController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { local } = req.body;

    const updateUserService = new UserUpdateRuaService();

    const userUpdated = await updateUserService.execute({
      user_id,
      local,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserRuaController }