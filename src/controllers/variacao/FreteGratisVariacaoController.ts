import { Request, Response } from 'express'
import { FreteGratisVariacaoService } from '../../services/variacao/FreteGratisVariacaoService'

class FreteGratisVariacaoController {
  async handle(req: Request, res: Response){
    const variacao_id = req.query.variacao_id as string;

    const freteVariacaoService = new FreteGratisVariacaoService();

    const variacao = await freteVariacaoService.execute({
      variacao_id
    });

    return res.json(variacao);

  }
}

export { FreteGratisVariacaoController }