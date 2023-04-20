import { Request, Response } from 'express';
import { UpdateImageCategoryService } from '../../services/category/UpdateImageCategoryService';
import { ListExactCategoryService } from '../../services/category/ListExactCategoryService';
import fs from 'fs';

class UpdateImageCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const updateImage = new UpdateImageCategoryService();
    const findImage = new ListExactCategoryService();

    const images = await findImage.execute({
      category_id,
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + images.imageCategory);

    if (!req.file) {
      throw new Error('error upload file');
    } else {
      const { originalname, filename: imageCategory } = req.file;

      const imageDeleted = await updateImage.execute({
        category_id,
        imageCategory
      });

      return res.json([images, imageDeleted]);
    }

  }
}

export { UpdateImageCategoryController }