import { Request, Response } from 'express';
import { UpdatePriceProductService } from '../../services/product/UpdatePriceProductService';

class UpdatePriceProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { price } = req.body;

    const updatePrice = new UpdatePriceProductService();

    const product = await updatePrice.execute({
      product_id,
      price,
    });

    return res.json(product);
    
  }
}

export { UpdatePriceProductController }