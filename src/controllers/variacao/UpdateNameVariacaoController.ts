import { Request, Response } from 'express';
import { UpdateNameVariacaoService } from '../../services/variacao/UpdateNameVariacaoService';

class UpdateNameVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { nameVariacao } = req.body;

    const updatName = new UpdateNameVariacaoService();

    const variacao = await updatName.execute({
      variacao_id,
      nameVariacao,
    });

    return res.json(variacao);
    
  }
}

export { UpdateNameVariacaoController }