import { Request, Response } from 'express';
import { UpdateOrderRedeSocialService } from '../../../services/store/socialMedia/UpdateOrderRedeSocialService';

class UpdateOrderRedeSocialController {
  async handle(req: Request, res: Response) {
    const { redesocial_id } = req.query;

    const { order } = req.body;

    const updateOrder = new UpdateOrderRedeSocialService();

    const store = await updateOrder.execute({
      redesocial_id,
      order,
    });

    return res.json(store);

  }
}

export { UpdateOrderRedeSocialController }