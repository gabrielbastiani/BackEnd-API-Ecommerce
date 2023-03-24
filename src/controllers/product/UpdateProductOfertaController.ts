import {Request, Response} from 'express'
import { UpdateProductOfertaService } from '../../services/product/UpdateProductOfertaService'

class UpdateProductOfertaController {
  async handle(req: Request, res: Response){
    const product_id = req.query.product_id as string;

    const updateOferta = new UpdateProductOfertaService();

    const product = await updateOferta.execute({
      product_id
    });

    return res.json(product);

  }
}

export { UpdateProductOfertaController }