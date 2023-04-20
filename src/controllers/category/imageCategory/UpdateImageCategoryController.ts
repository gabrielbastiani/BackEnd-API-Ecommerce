import { Request, Response } from 'express';
import { UpdateImageCategoryService } from '../../../services/category/imageCategory/UpdateImageCategoryService';
import { ListExactImageCategoryService } from '../../../services/category/imageCategory/ListExactImageCategoryService';
import fs from 'fs';

class UpdateImageCategoryController {
    async handle(req: Request, res: Response) {
        const imageCategory_id = req.query.imageCategory_id as string;

        const updatePhoto = new UpdateImageCategoryService();
        const removeImage = new ListExactImageCategoryService();

        const imageCategory = await removeImage.execute({
            imageCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageCategory.categoryImage);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: categoryImage } = req.file;

            const updateImages = await updatePhoto.execute({
                imageCategory_id,
                categoryImage,
            });

            return res.json([imageCategory, updateImages]);

        }

    }
}

export { UpdateImageCategoryController }