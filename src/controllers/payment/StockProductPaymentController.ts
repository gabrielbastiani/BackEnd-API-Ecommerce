import { Request, Response } from 'express';
import { StockProductPaymentService } from '../../services/payment/StockProductPaymentService';

class StockProductPaymentController {
  async handle(req: Request, res: Response) {

    const product_id = req.query.product_id as string;

    const updateStock = new StockProductPaymentService();

    const product = await updateStock.execute({ product_id });

    return res.json(product);

  }
}

export { StockProductPaymentController }