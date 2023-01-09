import { Request, Response } from 'express';
import { UpdateSKUProductService } from '../../services/product/UpdateSKUProductService';

class UpdateSKUProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { sku } = req.body;

    const updateSKU = new UpdateSKUProductService();

    const product = await updateSKU.execute({
      product_id,
      sku,
    });

    return res.json(product);
    
  }
}

export { UpdateSKUProductController }