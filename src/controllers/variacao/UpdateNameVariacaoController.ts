import { Request, Response } from 'express';
import { UpdateNameVariacaoService } from '../../services/variacao/UpdateNameVariacaoService';

class UpdateNameVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { nameVariacao, slug } = req.body;

    const updateNameVariacaoService = new UpdateNameVariacaoService();

    const variacao = await updateNameVariacaoService.execute({
      variacao_id,
      nameVariacao,
      slug
    });

    return res.json(variacao);
    
  }
}

export { UpdateNameVariacaoController }