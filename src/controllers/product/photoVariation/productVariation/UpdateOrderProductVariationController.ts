import { Request, Response } from 'express';
import { UpdateOrderProductVariationService } from '../../../services/productVariation/UpdateOrderProductVariationService';

class UpdateOrderProductVariationController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const { order } = req.body;

    const updateName = new UpdateOrderProductVariationService();

    const variation = await updateName.execute({
      productVariation_id,
      order
    });

    return res.json(variation);

  }
}

export { UpdateOrderProductVariationController }