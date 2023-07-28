import { Request, Response } from 'express'
import { UpdateProductVariationService } from '../../../services/product/productVariation/UpdateProductVariationService';

class UpdateProductVariationController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const { product_id } = req.body;

    const updateStatus = new UpdateProductVariationService();

    const variation = await updateStatus.execute({
      productVariation_id,
      product_id
    });

    return res.json(variation);

  }
}

export { UpdateProductVariationController }