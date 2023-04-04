import { Request, Response } from 'express';
import { UpdatePosicaoBannerService } from '../../services/banners/UpdatePosicaoBannerService';

class UpdatePosicaoBannerController {
  async handle(req: Request, res: Response) {
    const banner_id = req.query.banner_id;

    const { posicao, slugPosicao } = req.body;

    const bannerUpdate = new UpdatePosicaoBannerService();

    const updatePosicao = await bannerUpdate.execute({
      banner_id,
      posicao,
      slugPosicao
    });
    return res.json(updatePosicao);
  }
}

export { UpdatePosicaoBannerController }