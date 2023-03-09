import { Request, Response } from 'express';
import { UserUpdateCpfService } from '../../services/user/UserUpdateCpfService';

class UpdateUserCpfController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { cpf } = req.body;

    const updateUserService = new UserUpdateCpfService();

    const userUpdated = await updateUserService.execute({
      user_id,
      cpf,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserCpfController }