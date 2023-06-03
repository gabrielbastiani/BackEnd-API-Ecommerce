import { Request, Response } from 'express';
import { DeleteImageAttributeRelationIDService } from '../../../../services/product/relationAttributeProduct/imageAttribute/DeleteImageAttributeRelationIDService';
import { FindAllImageAttributeRelationIDService } from '../../../../services/product/relationAttributeProduct/imageAttribute/FindAllImageAttributeRelationIDService';
import fs from 'fs';

class DeleteImageAttributeRelationIDController {
  async handle(req: Request, res: Response) {
    const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

    const deleteImage = new FindAllImageAttributeRelationIDService();
    const arrayPhotos = await deleteImage.execute({ relationAttributeProduct_id });

    arrayPhotos.forEach(element => {
      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.image);
    });

    const deleteImageAttribute = new DeleteImageAttributeRelationIDService();

    const attributeImage = await deleteImageAttribute.execute({
      relationAttributeProduct_id,
    });

    return res.json([attributeImage, arrayPhotos]);

  }
}

export { DeleteImageAttributeRelationIDController }