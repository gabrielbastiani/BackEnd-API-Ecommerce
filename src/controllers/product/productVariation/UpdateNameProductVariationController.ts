import { Request, Response } from 'express'
import { UpdateNameProductVariationService } from '../../../services/productVariation/UpdateNameProductVariationService';

class UpdateNameProductVariationController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const { product_id } = req.body;

    const updateStatus = new UpdateNameProductVariationService();

    const variation = await updateStatus.execute({
      productVariation_id,
      product_id
    });

    return res.json(variation);

  }
}

export { UpdateNameProductVariationController }