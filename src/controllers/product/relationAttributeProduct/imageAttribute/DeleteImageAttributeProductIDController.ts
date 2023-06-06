import { Request, Response } from 'express';
import { DeleteImageAttributeProductIDService } from '../../../../services/product/relationAttributeProduct/imageAttribute/DeleteImageAttributeProductIDService';
import { FindAllImageAttributeProductIDService } from '../../../../services/product/relationAttributeProduct/imageAttribute/FindAllImageAttributeProductIDService';
import fs from 'fs';

class DeleteImageAttributeProductIDController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteImage = new FindAllImageAttributeProductIDService();
    const arrayPhotos = await deleteImage.execute({ product_id });

    arrayPhotos.forEach(element => {
      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.image);
    });

    const deleteImageAttribute = new DeleteImageAttributeProductIDService();

    const attributeImage = await deleteImageAttribute.execute({
      product_id,
    });

    return res.json([attributeImage, arrayPhotos]);

  }
}

export { DeleteImageAttributeProductIDController }