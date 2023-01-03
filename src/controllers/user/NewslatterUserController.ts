import {Request, Response} from 'express'
import { NewslatterUserService } from '../../services/user/NewslatterUserService'

class NewslatterUserController {
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const newslatterUserService = new NewslatterUserService();

    const user = await newslatterUserService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { NewslatterUserController }