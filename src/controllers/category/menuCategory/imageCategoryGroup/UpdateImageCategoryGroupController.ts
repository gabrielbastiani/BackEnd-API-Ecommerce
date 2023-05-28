import { Request, Response } from 'express';
import { UpdateImageCategoryGroupService } from '../../../../services/category/groupCategory/imageCategoryGroup/UpdateImageCategoryGroupService';
import { ListExactImageCategoryGroupService } from '../../../../services/category/groupCategory/imageCategoryGroup/ListExactImageCategoryGroupService';
import fs from 'fs';

class UpdateImageCategoryGroupController {
    async handle(req: Request, res: Response) {
        const imageGroupCategory_id = req.query.imageGroupCategory_id as string;

        const updateImage = new UpdateImageCategoryGroupService();
        const removeImage = new ListExactImageCategoryGroupService();

        const imagesUpdateCateg = await removeImage.execute({
            imageGroupCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imagesUpdateCateg.imageGroup);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageGroup } = req.file;

            const updateBanner = await updateImage.execute({
                imageGroupCategory_id,
                imageGroup,
            });

            return res.json([imagesUpdateCateg, updateBanner]);

        }

    }
}

export { UpdateImageCategoryGroupController }