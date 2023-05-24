import {Request, Response} from 'express'
import { AuthenticatedEmailUserService } from '../../services/user/AuthenticatedEmailUserService'

class AuthenticatedEmailUserController{
  async handle(req: Request, res: Response){
    const admin_id = req.query.admin_id as string;

    const authenticatedEmailUserService = new AuthenticatedEmailUserService();

    const user = await authenticatedEmailUserService.execute({
      admin_id
    });

    return res.json(user);

  }
}

export { AuthenticatedEmailUserController }