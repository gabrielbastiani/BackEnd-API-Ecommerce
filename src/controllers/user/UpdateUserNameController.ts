import { Request, Response } from 'express';
import { UserUpdateNameService } from '../../services/user/UserUpdateNameService';

class UpdateUserNameController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { nameComplete, slug } = req.body;

    const updateUserService = new UserUpdateNameService();

    const userUpdated = await updateUserService.execute({
      user_id,
      nameComplete,
      slug
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserNameController }