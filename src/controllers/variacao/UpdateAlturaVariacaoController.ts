import { Request, Response } from 'express';
import { UpdateAlturaVariacaoService } from '../../services/variacao/UpdateAlturaVariacaoService';

class UpdateAlturaVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { alturaCMVariacao } = req.body;

    const updateAlturaVariacaoService = new UpdateAlturaVariacaoService();

    const variacao = await updateAlturaVariacaoService.execute({
      variacao_id,
      alturaCMVariacao,
    });

    return res.json(variacao);
    
  }
}

export { UpdateAlturaVariacaoController }