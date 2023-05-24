import {Request, Response} from 'express'
import { AuthenticatedEmailUserService } from '../../services/user/AuthenticatedEmailUserService'

class AuthenticatedEmailUserController{
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const authenticatedEmailUserService = new AuthenticatedEmailUserService();

    const user = await authenticatedEmailUserService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { AuthenticatedEmailUserController }