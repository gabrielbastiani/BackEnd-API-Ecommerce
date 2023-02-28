import { Request, Response } from 'express';
import { UpdatePhotoProductService } from '../../../services/product/photoproduct/UpdatePhotoProductService';
import { DeletePhotoProductService } from '../../../services/product/photoproduct/DeletePhotoProductService';
import fs from 'fs';

class UpdatePhotoProductController {
  async handle(req: Request, res: Response) {
    const photoProduts_id = req.query.photoProduts_id as string;

    const updatePhoto = new UpdatePhotoProductService();
    const deletePhoto = new DeletePhotoProductService();

    const photoProducts = await deletePhoto.execute({
      photoProduts_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + photoProducts.photo);

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: photo } = req.file;

      const updatePhotoProduct = await updatePhoto.execute({
        photoProduts_id,
        photo,
      });

      return res.json([photoProducts, updatePhotoProduct]);

    }

  }
}

export { UpdatePhotoProductController }