import { Request, Response } from 'express';
import { UpdateStockProductService } from '../../services/product/UpdateStockProductService';

class StockProductPaymentController {
  async handle(req: Request, res: Response) {

    const product_id = req.query.product_id as string;

    const { stock } = req.body;

    const updateStock = new UpdateStockProductService();

    const product = await updateStock.execute({
      product_id,
      stock
    });

    return res.json(product);
    
  }
}

export { StockProductPaymentController }