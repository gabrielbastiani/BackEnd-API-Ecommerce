import {Request, Response} from 'express'
import { UserUpdateNewslatterService } from '../../services/user/UserUpdateNewslatterService'

class UpdateUserNewslatterController {
  async handle(req: Request, res: Response){
    const admin_id = req.query.admin_id as string;
    const { newslatter } = req.body;

    const userUpdateNewslatterService = new UserUpdateNewslatterService();

    const user = await userUpdateNewslatterService.execute({
      admin_id,
      newslatter
    });

    return res.json(user);

  }
}

export { UpdateUserNewslatterController }