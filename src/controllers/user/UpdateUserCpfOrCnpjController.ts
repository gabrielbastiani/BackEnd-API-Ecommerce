import { Request, Response } from 'express';
import { UserUpdateCpfOrCnpjService } from '../../services/user/UserUpdateCpfOrCnpjService';

class UpdateUserCpfOrCnpjController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { cpfOrCnpj } = req.body;

    const updateUserService = new UserUpdateCpfOrCnpjService();

    const userUpdated = await updateUserService.execute({
      user_id,
      cpfOrCnpj,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserCpfOrCnpjController }