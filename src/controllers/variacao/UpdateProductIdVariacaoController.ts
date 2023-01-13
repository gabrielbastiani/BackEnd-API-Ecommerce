import { Request, Response } from 'express';
import { UpdateProductIdVariacaoService } from '../../services/variacao/UpdateProductIdVariacaoService';

class UpdateProductIdVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { product_id } = req.body;

    const updateProductIdVariacaoService = new UpdateProductIdVariacaoService();

    const variacao = await updateProductIdVariacaoService.execute({
      variacao_id,
      product_id,
    });

    return res.json(variacao);
    
  }
}

export { UpdateProductIdVariacaoController }