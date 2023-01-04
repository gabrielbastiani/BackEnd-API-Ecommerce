import { Request, Response } from 'express';
import { UserUpdateCityService } from '../../services/user/UserUpdateCityService';

class UpdateUserCityController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { city } = req.body;

    const updateUserService = new UserUpdateCityService();

    const userUpdated = await updateUserService.execute({
      user_id,
      city,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserCityController }