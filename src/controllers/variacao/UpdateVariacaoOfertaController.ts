import {Request, Response} from 'express'
import { UpdateVariacaoOfertaService } from '../../services/variacao/UpdateVariacaoOfertaService'

class UpdateVariacaoOfertaController {
  async handle(req: Request, res: Response){
    const variacao_id = req.query.variacao_id as string;

    const updateOfertas = new UpdateVariacaoOfertaService();

    const variacao = await updateOfertas.execute({
      variacao_id
    });

    return res.json(variacao);

  }
}

export { UpdateVariacaoOfertaController }