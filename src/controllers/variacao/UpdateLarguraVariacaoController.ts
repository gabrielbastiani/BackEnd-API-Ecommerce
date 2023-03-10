import { Request, Response } from 'express';
import { UpdateLarguraVariacaoService } from '../../services/variacao/UpdateLarguraVariacaoService';

class UpdateLarguraVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { larguraCm } = req.body;

    const updateLarguraVariacaoService = new UpdateLarguraVariacaoService();

    const variacao = await updateLarguraVariacaoService.execute({
      variacao_id,
      larguraCm,
    });

    return res.json(variacao);
    
  }
}

export { UpdateLarguraVariacaoController }