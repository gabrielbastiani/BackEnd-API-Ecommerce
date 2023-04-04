import { Request, Response } from 'express';
import { UpdatePosicaoProductService } from '../../services/product/UpdatePosicaoProductService';

class UpdatePosicaoProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { posicao, slugPosicao } = req.body;

    const updatePosicao = new UpdatePosicaoProductService();

    const product = await updatePosicao.execute({
      product_id,
      posicao,
      slugPosicao
    });

    return res.json(product);
    
  }
}

export { UpdatePosicaoProductController }