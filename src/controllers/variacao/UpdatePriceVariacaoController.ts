import { Request, Response } from 'express';
import { UpdatePriceVariacaoService } from '../../services/variacao/UpdatePriceVariacaoService';

class UpdatePriceVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { priceVariacao } = req.body;

    const updatePriceVariacaoService = new UpdatePriceVariacaoService();

    const variacao = await updatePriceVariacaoService.execute({
      variacao_id,
      priceVariacao,
    });

    return res.json(variacao);
    
  }
}

export { UpdatePriceVariacaoController }