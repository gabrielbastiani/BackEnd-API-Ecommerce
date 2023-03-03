import { Request, Response } from "express";
import { DeletePhotoProductService } from "../../../services/product/photoproduct/DeletePhotoProductService";
import fs from 'fs';

class DeletePhotoProductController {
  async handle(req: Request, res: Response) {
    const photoProduts_id = req.query.photoProduts_id as string;

    const deletePhotoProductService = new DeletePhotoProductService();

    const photoProducts = await deletePhotoProductService.execute({
      photoProduts_id,
    });

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + photoProducts.photo);

    return res.json(photoProducts);
  }
}

export { DeletePhotoProductController };