import {Request, Response} from 'express'
import { ActiveOrDesactiveUserService } from '../../services/user/ActiveOrDesactiveUserService'

class ActiveOrDesactiveUserController {
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const activeOrDesactiveUserService = new ActiveOrDesactiveUserService();

    const user = await activeOrDesactiveUserService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { ActiveOrDesactiveUserController }