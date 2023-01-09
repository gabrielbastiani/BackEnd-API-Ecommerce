import {Request, Response} from 'express'
import { FreteGratisProductService } from '../../services/product/FreteGratisProductService'

class FreteGratisProductController {
  async handle(req: Request, res: Response){
    const product_id = req.query.product_id as string;

    const freteGratisProductService = new FreteGratisProductService();

    const product = await freteGratisProductService.execute({
      product_id
    });

    return res.json(product);

  }
}

export { FreteGratisProductController }