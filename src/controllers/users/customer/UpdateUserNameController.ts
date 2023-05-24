import { Request, Response } from 'express';
import { UserUpdateNameService } from '../../services/user/UserUpdateNameService';

class UpdateUserNameController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id;

    const { name, slug } = req.body;

    const updateUserService = new UserUpdateNameService();

    const userUpdated = await updateUserService.execute({
      admin_id,
      name,
      slug
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserNameController }