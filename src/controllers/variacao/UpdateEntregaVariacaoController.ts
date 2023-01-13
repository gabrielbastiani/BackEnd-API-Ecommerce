import { Request, Response } from 'express'
import { UpdateEntregaVariacaoService } from '../../services/variacao/UpdateEntregaVariacaoService'

class UpdateEntregaVariacaoController {
  async handle(req: Request, res: Response){
    const variacao_id = req.query.variacao_id as string;

    const updateEntregaVariacaoService = new UpdateEntregaVariacaoService();

    const product = await updateEntregaVariacaoService.execute({
      variacao_id
    });

    return res.json(product);

  }
}

export { UpdateEntregaVariacaoController }