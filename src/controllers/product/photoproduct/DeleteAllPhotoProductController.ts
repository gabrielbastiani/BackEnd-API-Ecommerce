import { Request, Response } from "express";
import { DeleteAllPhotoProductService } from "../../../services/product/photoproduct/DeleteAllPhotoProductService";
import fs from 'fs';

class DeleteAllPhotoProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deletePhotoProductService = new DeleteAllPhotoProductService();

    const photoProducts = await deletePhotoProductService.execute({
      product_id,
    });

    /* fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + photoProducts.count); */

    return res.json(photoProducts);
  }
}

export { DeleteAllPhotoProductController };