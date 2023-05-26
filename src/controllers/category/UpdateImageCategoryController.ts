import { Request, Response } from 'express';
import { UpdateImageCategoryService } from '../../services/category/imageCategory/UpdateImageCategoryService';
import { ListExactImageCategoryService } from '../../services/category/imageCategory/FindUniqueImageCategoryService';
import fs from 'fs';

class UpdateImageCategoryController {
  async handle(req: Request, res: Response) {
    const imageCategory_id = req.query.imageCategory_id as string;

    const updateImage = new UpdateImageCategoryService();
    const findImage = new ListExactImageCategoryService();

    const images = await findImage.execute({
      imageCategory_id,
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + images.categoryImage);

    if (!req.file) {
      throw new Error('error upload file');
    } else {
      const { originalname, filename: categoryImage } = req.file;

      const imageDeleted = await updateImage.execute({
        imageCategory_id,
        categoryImage
      });

      return res.json([images, imageDeleted]);
    }

  }
}

export { UpdateImageCategoryController }