import { Request, Response } from 'express';
import { UpdateStockProductService } from '../../services/product/UpdateStockProductService';

class UpdateStockProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const { stock } = req.body;

    const updateName = new UpdateStockProductService();

    const product = await updateName.execute({
      product_id,
      stock
    });

    return res.json(product);
    
  }
}

export { UpdateStockProductController }