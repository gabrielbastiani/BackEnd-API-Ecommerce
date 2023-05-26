import { Request, Response } from 'express';
import { UpdatePosicaoPhotoProductService } from '../../../services/product/photoProduct/UpdatePosicaoPhotoProductService';

class UpdatePosicaoPhotoProductController {
  async handle(req: Request, res: Response) {
    const photoProduts_id = req.query.photoProduts_id;

    const { posicao, slugPosicao } = req.body;

    const updatePhoto = new UpdatePosicaoPhotoProductService();

    const updatePhotos = await updatePhoto.execute({
      photoProduts_id,
      posicao,
      slugPosicao
    });

    return res.json(updatePhotos);

  }
}

export { UpdatePosicaoPhotoProductController }