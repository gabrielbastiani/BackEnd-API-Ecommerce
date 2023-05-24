import {Request, Response} from 'express'
import { AuthenticatedEmailAdminService } from '../../../services/users/admin/AuthenticatedEmailAdminService'; 

class AuthenticatedEmailAdminController {
  async handle(req: Request, res: Response){
    const admin_id = req.query.admin_id as string;

    const authenticatedEmailUserService = new AuthenticatedEmailAdminService();

    const admin = await authenticatedEmailUserService.execute({
      admin_id
    });

    return res.json(admin);

  }
}

export { AuthenticatedEmailAdminController }