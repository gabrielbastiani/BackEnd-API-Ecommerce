import {Request, Response} from 'express'
import { UpdateProductDestaqueService } from '../../services/product/UpdateProductDestaqueService'

class UpdateProductDestqueController {
  async handle(req: Request, res: Response){
    const product_id = req.query.product_id as string;

    const updateDestaque = new UpdateProductDestaqueService();

    const product = await updateDestaque.execute({
      product_id
    });

    return res.json(product);

  }
}

export { UpdateProductDestqueController }