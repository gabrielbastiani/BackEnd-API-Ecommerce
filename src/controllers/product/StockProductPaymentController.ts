import { Request, Response } from 'express';
import { StockProductPaymentService } from '../../services/product/StockProductPaymentService';

class StockProductPaymentController {
  async handle(req: Request, res: Response) {
    
    const product_id = req.query.product_id as string;

    const { stock } = req.body;

    const updateStock = new StockProductPaymentService();

    const product = await updateStock.execute({
      product_id,
      stock
    });

    return res.json(product);
    
  }
}

export { StockProductPaymentController }