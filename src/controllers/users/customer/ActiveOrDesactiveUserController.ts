import {Request, Response} from 'express'
import { ActiveOrDesactiveUserService } from '../../services/user/ActiveOrDesactiveUserService'

class ActiveOrDesactiveUserController {
  async handle(req: Request, res: Response){
    const admin_id = req.query.admin_id as string;

    const activeOrDesactiveUserService = new ActiveOrDesactiveUserService();

    const user = await activeOrDesactiveUserService.execute({
      admin_id
    });

    return res.json(user);

  }
}

export { ActiveOrDesactiveUserController }