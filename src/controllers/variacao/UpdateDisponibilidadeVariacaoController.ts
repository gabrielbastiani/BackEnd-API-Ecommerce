import {Request, Response} from 'express'
import { UpdateDisponibilidadeVariacaoService } from '../../services/variacao/UpdateDisponibilidadeVariacaoService'

class UpdateDisponibilidadeVariacaoController {
  async handle(req: Request, res: Response){
    const variacao_id = req.query.variacao_id as string;

    const updateDisponibilidadeVariacaoService = new UpdateDisponibilidadeVariacaoService();

    const product = await updateDisponibilidadeVariacaoService.execute({
      variacao_id
    });

    return res.json(product);

  }
}

export { UpdateDisponibilidadeVariacaoController }