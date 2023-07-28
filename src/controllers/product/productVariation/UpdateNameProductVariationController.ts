import { Request, Response } from 'express'
import { UpdateNameProductVariationService } from '../../../services/product/productVariation/UpdateNameProductVariationService';

class UpdateNameProductVariationController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const { variationName } = req.body;

    const updateStatus = new UpdateNameProductVariationService();

    const variation = await updateStatus.execute({
      productVariation_id,
      variationName
    });

    return res.json(variation);

  }
}

export { UpdateNameProductVariationController }