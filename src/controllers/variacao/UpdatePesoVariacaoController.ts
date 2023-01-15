import { Request, Response } from 'express';
import { UpdatePesoVariacaoService } from '../../services/variacao/UpdatePesoVariacaoService';

class UpdatePesoVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { pesoKg } = req.body;

    const updatePesoVariacaoService = new UpdatePesoVariacaoService();

    const variacao = await updatePesoVariacaoService.execute({
      variacao_id,
      pesoKg,
    });

    return res.json(variacao);
    
  }
}

export { UpdatePesoVariacaoController }