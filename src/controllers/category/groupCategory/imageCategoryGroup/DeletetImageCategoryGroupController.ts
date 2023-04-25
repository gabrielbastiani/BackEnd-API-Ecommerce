import { Request, Response } from 'express';
import { DeletetImageCategoryGroupService } from '../../../../services/category/groupCategory/imageCategoryGroup/DeletetImageCategoryGroupService';
import { ListExactImageCategoryGroupService } from '../../../../services/category/groupCategory/imageCategoryGroup/ListExactImageCategoryGroupService';
import fs from 'fs';

class DeletetImageCategoryGroupController {
  async handle(req: Request, res: Response) {
    const imageGroupCategory_id = req.query.imageGroupCategory_id as string;

    const updatePhoto = new DeletetImageCategoryGroupService();
    const deletePhoto = new ListExactImageCategoryGroupService();

    const imageGroups = await deletePhoto.execute({
      imageGroupCategory_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageGroups.imageGroup);

    const updateImage = await updatePhoto.execute({
      imageGroupCategory_id,
    });

    return res.json([imageGroups, updateImage]);

  }
}

export { DeletetImageCategoryGroupController }