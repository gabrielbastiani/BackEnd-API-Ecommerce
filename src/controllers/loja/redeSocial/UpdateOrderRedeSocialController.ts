import { Request, Response } from 'express';
import { UpdateOrderRedeSocialService } from '../../../services/loja/redeSocial/UpdateOrderRedeSocialService';

class UpdateOrderRedeSocialController {
  async handle(req: Request, res: Response) {
    const redesocial_id = req.query.redesocial_id;

    const { order } = req.body;

    const updatecepLoja = new UpdateOrderRedeSocialService();

    const loja = await updatecepLoja.execute({
      redesocial_id,
      order,
    });

    return res.json(loja);

  }
}

export { UpdateOrderRedeSocialController }