import { Request, Response } from 'express';
import { UpdatePromocaoVariacaoService } from '../../services/variacao/UpdatePromocaoVariacaoService';

class UpdatePromocaoVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { promocao } = req.body;

    const updatePromocaoVariacaoService = new UpdatePromocaoVariacaoService();

    const variacao = await updatePromocaoVariacaoService.execute({
      variacao_id,
      promocao,
    });

    return res.json(variacao);
    
  }
}

export { UpdatePromocaoVariacaoController }