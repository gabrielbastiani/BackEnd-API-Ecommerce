import { Request, Response } from 'express';
import { UpdateSkuVariacaoService } from '../../services/variacao/UpdateSkuVariacaoService';

class UpdateSkuVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { skuVariacao } = req.body;

    const updateSkuVariacaoService = new UpdateSkuVariacaoService();

    const variacao = await updateSkuVariacaoService.execute({
      variacao_id,
      skuVariacao,
    });

    return res.json(variacao);
    
  }
}

export { UpdateSkuVariacaoController }