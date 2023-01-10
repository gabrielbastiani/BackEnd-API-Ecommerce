import { Request, Response } from 'express';
import { UpdateUrlVariacaoService } from '../../services/variacao/UpdateUrlVariacaoService';

class UpdateUrlVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { urlProduct } = req.body;

    const updateUrl = new UpdateUrlVariacaoService();

    const variacao = await updateUrl.execute({
      variacao_id,
      urlProduct,
    });

    return res.json(variacao);
    
  }
}

export { UpdateUrlVariacaoController }