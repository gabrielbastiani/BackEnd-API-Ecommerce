import { Request, Response } from 'express';
import { UpdateAvaliacaoProductService } from '../../services/product/UpdateAvaliacaoProductService';

class UpdateAvaliacaoProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { avaliacao } = req.body;

    const updateavaliacao = new UpdateAvaliacaoProductService();

    const product = await updateavaliacao.execute({
      product_id,
      avaliacao,
    });

    return res.json(product);
    
  }
}

export { UpdateAvaliacaoProductController }