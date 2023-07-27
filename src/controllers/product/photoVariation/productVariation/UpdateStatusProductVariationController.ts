import { Request, Response } from 'express'
import { UpdateStatusProductVariationService } from '../../../services/productVariation/UpdateStatusProductVariationService';

class UpdateStatusProductVariationController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const updateStatus = new UpdateStatusProductVariationService();

    const variation = await updateStatus.execute({
      productVariation_id
    });

    return res.json(variation);

  }
}

export { UpdateStatusProductVariationController }