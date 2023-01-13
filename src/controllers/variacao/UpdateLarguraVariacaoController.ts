import { Request, Response } from 'express';
import { UpdateLarguraVariacaoService } from '../../services/variacao/UpdateLarguraVariacaoService';

class UpdateLarguraVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { larguraCMVariacao } = req.body;

    const updateLarguraVariacaoService = new UpdateLarguraVariacaoService();

    const variacao = await updateLarguraVariacaoService.execute({
      variacao_id,
      larguraCMVariacao,
    });

    return res.json(variacao);
    
  }
}

export { UpdateLarguraVariacaoController }