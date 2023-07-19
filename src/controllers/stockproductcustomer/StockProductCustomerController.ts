import { Request, Response } from 'express'
import { StockProductCustomerService } from '../../services/stockproductcustomer/StockProductCustomerService';

class StockProductCustomerController {
  async handle(req: Request, res: Response){

    const createStockProduct = new StockProductCustomerService();

    const stock = await createStockProduct.execute();

    return res.json(stock);

  }
}

export { StockProductCustomerController }