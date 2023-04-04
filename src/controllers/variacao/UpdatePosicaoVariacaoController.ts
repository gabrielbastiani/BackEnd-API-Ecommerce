import { Request, Response } from 'express';
import { UpdatePosicaoVariacaoService } from '../../services/variacao/UpdatePosicaoVariacaoService';

class UpdatePosicaoVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { posicao, slugPosicao } = req.body;

    const updatePosicao = new UpdatePosicaoVariacaoService();

    const variacao = await updatePosicao.execute({
      variacao_id,
      posicao,
      slugPosicao
    });

    return res.json(variacao);

  }
}

export { UpdatePosicaoVariacaoController }