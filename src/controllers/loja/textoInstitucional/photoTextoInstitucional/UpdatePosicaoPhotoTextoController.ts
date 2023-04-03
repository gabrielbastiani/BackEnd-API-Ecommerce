import { Request, Response } from 'express';
import { UpdatePosicaoPhotoTextoService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/UpdatePosicaoPhotoTextoService';

class UpdatePosicaoPhotoTextoController {
  async handle(req: Request, res: Response) {
    const imageloja_id = req.query.imageloja_id;

    const { posicao, slugPosicao } = req.body;

    const updatePosicao = new UpdatePosicaoPhotoTextoService();

    const posicaoUpdate = await updatePosicao.execute({
      imageloja_id,
      posicao,
      slugPosicao
    });

    return res.json(posicaoUpdate);

  }
}

export { UpdatePosicaoPhotoTextoController }