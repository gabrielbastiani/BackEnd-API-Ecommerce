import { Request, Response } from 'express'
import { UpdateVariationNameService } from '../../../services/product/productVariation/UpdateVariationNameService';

class UpdateVariationNameController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const { variationProduct } = req.body;

    const updateStatus = new UpdateVariationNameService();

    const variation = await updateStatus.execute({
      productVariation_id,
      variationProduct
    });

    return res.json(variation);

  }
}

export { UpdateVariationNameController }