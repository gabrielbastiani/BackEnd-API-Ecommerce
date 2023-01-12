import {Request, Response} from 'express'
import { DisponibilidadeDoProductService } from '../../services/product/DisponibilidadeDoProductService'

class DisponibilidadeDoProductController {
  async handle(req: Request, res: Response){
    const product_id = req.query.product_id as string;

    const disponibilidadeDoProductService = new DisponibilidadeDoProductService();

    const product = await disponibilidadeDoProductService.execute({
      product_id
    });

    return res.json(product);

  }
}

export { DisponibilidadeDoProductController }