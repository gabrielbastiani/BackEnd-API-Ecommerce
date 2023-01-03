import {Request, Response} from 'express'
import { UserRoleUserService } from '../../services/user/UserRoleUserService'

class UserRoleUserController{
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const userRoleUserService = new UserRoleUserService();

    const user = await userRoleUserService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { UserRoleUserController }