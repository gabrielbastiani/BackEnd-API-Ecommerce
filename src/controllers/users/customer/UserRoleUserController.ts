import {Request, Response} from 'express'
import { UserRoleUserService } from '../../services/user/UserRoleUserService'

class UserRoleUserController{
  async handle(req: Request, res: Response){
    const admin_id = req.query.admin_id as string;

    const userRoleUserService = new UserRoleUserService();

    const user = await userRoleUserService.execute({
      admin_id
    });

    return res.json(user);

  }
}

export { UserRoleUserController }