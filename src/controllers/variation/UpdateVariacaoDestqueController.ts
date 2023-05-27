import {Request, Response} from 'express'
import { UpdateVariacaoDestaqueService } from '../../services/variacao/UpdateVariacaoDestaqueService'

class UpdateVariacaoDestqueController {
  async handle(req: Request, res: Response){
    const variacao_id = req.query.variacao_id as string;

    const updateDestaque = new UpdateVariacaoDestaqueService();

    const variacao = await updateDestaque.execute({
      variacao_id
    });

    return res.json(variacao);

  }
}

export { UpdateVariacaoDestqueController }