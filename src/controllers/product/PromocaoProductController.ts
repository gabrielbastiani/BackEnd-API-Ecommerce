import {Request, Response} from 'express'
import { PromocaoProductService } from '../../services/product/PromocaoProductService'

class PromocaoProductController {
  async handle(req: Request, res: Response){
    const product_id = req.query.product_id as string;

    const { promocao } = req.body;

    const promocaoProductService = new PromocaoProductService();

    const product = await promocaoProductService.execute({
      product_id,
      promocao
    });

    return res.json(product);

  }
}

export { PromocaoProductController }