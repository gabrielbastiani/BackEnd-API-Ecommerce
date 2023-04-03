import { Request, Response } from 'express';
import { UpdatePosicaoTextoService } from '../../../services/loja/textoInstitucional/UpdatePosicaoTextoService';

class UpdatePosicaoTextoController {
  async handle(req: Request, res: Response) {
    const textoinstitucional_id = req.query.textoinstitucional_id;

    const { posicao, slugPosicao } = req.body;

    const updatePocisao = new UpdatePosicaoTextoService();

    const loja = await updatePocisao.execute({
      textoinstitucional_id,
      posicao,
      slugPosicao
    });

    return res.json(loja);

  }
}

export { UpdatePosicaoTextoController }