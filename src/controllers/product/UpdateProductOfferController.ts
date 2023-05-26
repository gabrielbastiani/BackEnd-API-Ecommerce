import { Request, Response } from 'express'
import { UpdateProductOfferService } from '../../services/product/UpdateProductOfferService'

class UpdateProductOfferController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const updateOffer = new UpdateProductOfferService();

    const product = await updateOffer.execute({
      product_id
    });

    return res.json(product);

  }
}

export { UpdateProductOfferController }