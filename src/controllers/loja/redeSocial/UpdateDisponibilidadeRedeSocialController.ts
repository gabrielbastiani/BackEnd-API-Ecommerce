import { Request, Response } from 'express';
import { UpdateDisponibilidadeRedeSocialService } from '../../../services/loja/redeSocial/UpdateDisponibilidadeRedeSocialService';

class UpdateDisponibilidadeRedeSocialController {
  async handle(req: Request, res: Response) {
    const redesocial_id = req.query.redesocial_id as string;

    const updateRedes = new UpdateDisponibilidadeRedeSocialService();

    const redeUpdate = await updateRedes.execute({
      redesocial_id
    });

    return res.json(redeUpdate);

  }
}

export { UpdateDisponibilidadeRedeSocialController }