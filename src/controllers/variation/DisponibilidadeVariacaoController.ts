import {Request, Response} from 'express'
import { DisponibilidadeVariacaoService } from '../../services/variacao/DisponibilidadeVariacaoService'

class UpdateDisponibilidadeVariacaoController {
  async handle(req: Request, res: Response){
    const variacao_id = req.query.variacao_id as string;

    const updateDisponibilidadeVariacaoService = new DisponibilidadeVariacaoService();

    const variacao = await updateDisponibilidadeVariacaoService.execute({
      variacao_id
    });

    return res.json(variacao);

  }
}

export { UpdateDisponibilidadeVariacaoController }