import { Request, Response } from 'express';
import { UpdateQuantidadeProductService } from '../../services/product/UpdateQuantidadeProductService';

class UpdateQuantidadeProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { quantidade } = req.body;

    const updatequantidade = new UpdateQuantidadeProductService();

    const product = await updatequantidade.execute({
      product_id,
      quantidade,
    });

    return res.json(product);
    
  }
}

export { UpdateQuantidadeProductController }