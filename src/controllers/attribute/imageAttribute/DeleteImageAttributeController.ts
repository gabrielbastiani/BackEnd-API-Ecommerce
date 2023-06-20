import { Request, Response } from 'express';
import { DeleteImageAttributeService } from '../../../../services/product/relationAttributeProduct/imageAttribute/DeleteImageAttributeService';
import { FindUniqueImageAttributeService } from '../../../../services/product/relationAttributeProduct/imageAttribute/FindUniqueImageAttributeService';
import fs from 'fs';

class DeleteImageAttributeController {
  async handle(req: Request, res: Response) {
    const imageAttribute_id = req.query.imageAttribute_id as string;

    const deleteImage = new DeleteImageAttributeService();
    const findImage = new FindUniqueImageAttributeService();

    const imageAttribute = await findImage.execute({
      imageAttribute_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageAttribute.image);

    const deleteImageAttribute = await deleteImage.execute({
      imageAttribute_id,
    });

    return res.json([imageAttribute, deleteImageAttribute]);

  }
}

export { DeleteImageAttributeController }