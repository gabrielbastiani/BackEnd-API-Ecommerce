import { Request, Response } from "express";
import { DeleteAllPhotoProductService } from "../../../services/product/photoProduct/DeleteAllPhotoProductService";
import { AllPhotosProductService } from "../../../services/product/photoproduct/AllPhotosProductService";
import fs from 'fs';

class DeleteAllPhotoProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const photosGet = new AllPhotosProductService();
    const arrayPhotos = await photosGet.execute({ product_id });

    arrayPhotos.forEach(element => {
      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.image);
    });

    const deletePhotoProductService = new DeleteAllPhotoProductService();

    const photoProducts = await deletePhotoProductService.execute({
      product_id,
    });

    return res.json([photoProducts, arrayPhotos]);
  }
}

export { DeleteAllPhotoProductController };