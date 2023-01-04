import {Request, Response} from 'express'
import { UserUpdateNewslatterService } from '../../services/user/UserUpdateNewslatterService'

class UpdateUserNewslatterController {
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const userUpdateNewslatterService = new UserUpdateNewslatterService();

    const user = await userUpdateNewslatterService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { UpdateUserNewslatterController }