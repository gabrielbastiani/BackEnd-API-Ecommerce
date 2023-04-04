import { Request, Response } from 'express';
import { UpdateOrderVariacaoService } from '../../services/variacao/UpdateOrderVariacaoService';

class UpdateOrderVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { order } = req.body;

    const updateName = new UpdateOrderVariacaoService();

    const variacao = await updateName.execute({
      variacao_id,
      order
    });

    return res.json(variacao);

  }
}

export { UpdateOrderVariacaoController }