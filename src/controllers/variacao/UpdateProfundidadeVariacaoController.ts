import { Request, Response } from 'express';
import { UpdateProfundidadeVariacaoService } from '../../services/variacao/UpdateProfundidadeVariacaoService';

class UpdateProfundidadeVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { profundidadeCm } = req.body;

    const updateProfundidadeVariacaoService = new UpdateProfundidadeVariacaoService();

    const variacao = await updateProfundidadeVariacaoService.execute({
      variacao_id,
      profundidadeCm,
    });

    return res.json(variacao);
    
  }
}

export { UpdateProfundidadeVariacaoController }