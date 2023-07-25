import { Request, Response } from 'express';
import { UpdateOrderPhotoProductService } from '../../../services/product/photoproduct/UpdateOrderPhotoProductService';

class UpdateOrderPhotoProductController {
  async handle(req: Request, res: Response) {
    const photoProduts_id = req.query.photoProduts_id as string;

    const { order } = req.body;

    const updatePhoto = new UpdateOrderPhotoProductService();

    const updatePhotos = await updatePhoto.execute({
      photoProduts_id,
      order,
    });

    return res.json(updatePhotos);

  }
}

export { UpdateOrderPhotoProductController }