import { Request, Response } from 'express';
import { DeletePhotoProductService } from '../../../services/product/photoproduct/DeletePhotoProductService';
import { FindUniquePhotoProductService } from '../../../services/product/photoproduct/FindUniquePhotoProductService';
import fs from 'fs';

class DeletePhotoProductController {
  async handle(req: Request, res: Response) {
    const photoProduts_id = req.query.photoProduts_id as string;

    const updatePhoto = new DeletePhotoProductService();
    const findImage = new FindUniquePhotoProductService();

    const productPhoto = await findImage.execute({
      photoProduts_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + productPhoto.image);

    const deletePhotoProduct = await updatePhoto.execute({
      photoProduts_id,
    });

    return res.json([productPhoto, deletePhotoProduct]);

  }
}

export { DeletePhotoProductController }