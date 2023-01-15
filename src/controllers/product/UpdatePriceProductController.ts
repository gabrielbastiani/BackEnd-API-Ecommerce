import { Request, Response } from 'express';
import { UpdatePriceProductService } from '../../services/product/UpdatePriceProductService';

class UpdatePriceProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { preco } = req.body;

    const updatePrice = new UpdatePriceProductService();

    const product = await updatePrice.execute({
      product_id,
      preco,
    });

    return res.json(product);
    
  }
}

export { UpdatePriceProductController }