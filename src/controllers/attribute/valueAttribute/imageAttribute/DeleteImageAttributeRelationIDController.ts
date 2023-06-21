import { Request, Response } from "express";
import { DeleteImageAttributeRelationIDService } from "../../../../services/attribute/valueAttribute/imageAttribute/DeleteImageAttributeRelationIDService";
import { FindAllImageAttributeRelationIDService } from "../../../../services/attribute/valueAttribute/imageAttribute/FindAllImageAttributeRelationIDService";
import fs from 'fs';

class DeleteImageAttributeRelationIDController {
  async handle(req: Request, res: Response) {
    const valueAttribute_id = req.query.valueAttribute_id as string;

    const photosGet = new FindAllImageAttributeRelationIDService();
    const arrayPhotos = await photosGet.execute({ valueAttribute_id });

    arrayPhotos.forEach(element => {
      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.image);
    });

    const deleteImages = new DeleteImageAttributeRelationIDService();

    const valueImages = await deleteImages.execute({
      valueAttribute_id,
    });

    return res.json([valueImages, arrayPhotos]);
  }
}

export { DeleteImageAttributeRelationIDController };