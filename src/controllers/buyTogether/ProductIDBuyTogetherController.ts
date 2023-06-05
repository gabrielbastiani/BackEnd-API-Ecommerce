import { Request, Response } from 'express';
import { ProductIDBuyTogetherService } from '../../services/buyTogether/ProductIDBuyTogetherService';

class ProductIDBuyTogetherController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const productBuy = new ProductIDBuyTogetherService();

    const buy = await productBuy.execute({
      product_id
    });

    return res.json(buy);

  }
}

export { ProductIDBuyTogetherController }