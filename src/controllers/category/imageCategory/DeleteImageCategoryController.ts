import { Request, Response } from 'express';
import { DeleteImageCategoryService } from '../../../services/category/imageCategory/DeleteImageCategoryService';
import { FindUniqueImageCategoryService } from '../../../services/category/imageCategory/FindUniqueImageCategoryService';
import fs from 'fs';

class DeleteImageCategoryController {
  async handle(req: Request, res: Response) {
    const imageCategory_id = req.query.imageCategory_id as string;

    const updatePhoto = new DeleteImageCategoryService();
    const findImage = new FindUniqueImageCategoryService();

    const categoryImage = await findImage.execute({
      imageCategory_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + categoryImage.image);

    const deleteImageCategory = await updatePhoto.execute({
      imageCategory_id,
    });

    return res.json([categoryImage, deleteImageCategory]);

  }
}

export { DeleteImageCategoryController }