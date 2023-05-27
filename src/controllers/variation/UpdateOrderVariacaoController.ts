import { Request, Response } from 'express';
import { UpdateOrderVariationService } from '../../services/variation/UpdateOrderVariationService';

class UpdateOrderVariacaoController {
  async handle(req: Request, res: Response) {
    const variation_id = req.query.variation_id as string;

    const { order } = req.body;

    const updateName = new UpdateOrderVariationService();

    const variation = await updateName.execute({
      variation_id,
      order
    });

    return res.json(variation);

  }
}

export { UpdateOrderVariacaoController }