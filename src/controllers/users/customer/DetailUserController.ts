import {Request, Response} from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailuserController{
  async handle(req: Request, res: Response){

    const admin_id = req.admin_id;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(admin_id);

    return res.json(user);

  }
}

export { DetailuserController  }