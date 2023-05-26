import { Request, Response } from 'express'
import { UpdateProductFreeShippingService } from '../../services/product/UpdateProductFreeShippingService'

class UpdateProductFreeShippingController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const updateFreeShipping = new UpdateProductFreeShippingService();

    const product = await updateFreeShipping.execute({
      product_id
    });

    return res.json(product);

  }
}

export { UpdateProductFreeShippingController }