import { Request, Response } from 'express';
import { DeletetImageMenuCategoryService } from '../../../../services/category/menuCategory/imageMenuCategory/DeletetImageMenuCategoryService';
import { FindUniqueImageMenuCategoryService } from '../../../../services/category/menuCategory/imageMenuCategory/FindUniqueImageMenuCategoryService';
import fs from 'fs';

class DeletetImageMenuCategoryController {
  async handle(req: Request, res: Response) {
    const imageMenuCategory_id = req.query.imageMenuCategory_id as string;

    const deleteImage = new DeletetImageMenuCategoryService();
    const findImage = new FindUniqueImageMenuCategoryService();

    const images = await findImage.execute({
      imageMenuCategory_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + images.image);

    const imageDelete = await deleteImage.execute({
      imageMenuCategory_id,
    });

    return res.json([images, imageDelete]);

  }
}

export { DeletetImageMenuCategoryController }