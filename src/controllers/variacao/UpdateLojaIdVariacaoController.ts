import { Request, Response } from 'express';
import { UpdateLojaIdVariacaoService } from '../../services/variacao/UpdateLojaIdVariacaoService';

class UpdateLojaIdVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { loja_id } = req.body;

    const updateLojaIdVariacaoService = new UpdateLojaIdVariacaoService();

    const variacao = await updateLojaIdVariacaoService.execute({
      variacao_id,
      loja_id,
    });

    return res.json(variacao);
    
  }
}

export { UpdateLojaIdVariacaoController }