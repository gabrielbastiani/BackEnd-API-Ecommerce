import {Request, Response} from 'express'
import { DesativarUserService } from '../../services/user/DesativarUserService'

class DesativarlUserController {
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const desativarUserService = new DesativarUserService();

    const user = await desativarUserService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { DesativarlUserController }