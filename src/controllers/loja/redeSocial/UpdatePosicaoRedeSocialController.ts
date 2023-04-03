import { Request, Response } from 'express';
import { UpdatePosicaoRedeSocialService } from '../../../services/loja/redeSocial/UpdatePosicaoRedeSocialService';

class UpdatePosicaoRedeSocialController {
  async handle(req: Request, res: Response) {
    const redesocial_id = req.query.redesocial_id;

    const { posicao, slugPosicao } = req.body;

    const updatePocisao = new UpdatePosicaoRedeSocialService();

    const loja = await updatePocisao.execute({
      redesocial_id,
      posicao,
      slugPosicao
    });

    return res.json(loja);

  }
}

export { UpdatePosicaoRedeSocialController }