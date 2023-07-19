import { Request, Response } from 'express'
import { CreateStockProductCustomerService } from '../../services/stockproductcustomer/CreateStockProductCustomerService';

class CreateStockProductCustomerController {
  async handle(req: Request, res: Response){
    const { email, product_id } = req.body;

    const createStockProduct = new CreateStockProductCustomerService();

    const stock = await createStockProduct.execute({
      email,
      product_id
    });

    return res.json(stock);

  }
}

export { CreateStockProductCustomerController }