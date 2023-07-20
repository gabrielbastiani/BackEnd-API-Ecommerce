import { Request, Response } from 'express'
import { StockProductCustomerService } from '../../services/stockproductcustomer/StockProductCustomerService';

class StockProductCustomerController {
  async handle(req: Request, res: Response){
    const product_id = req.query.product_id as string;

    const createStockProduct = new StockProductCustomerService();

    const stock = await createStockProduct.execute({ product_id });

    return res.json(stock);

  }
}

export { StockProductCustomerController }