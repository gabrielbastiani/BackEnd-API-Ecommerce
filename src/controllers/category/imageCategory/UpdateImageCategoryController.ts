import { Request, Response } from 'express';
import { UpdateImageCategoryService } from '../../../services/category/imageCategory/UpdateImageCategoryService';
import { FindUniqueImageCategoryService } from '../../../services/category/imageCategory/FindUniqueImageCategoryService';
import fs from 'fs';

class UpdateImageCategoryController {
    async handle(req: Request, res: Response) {
        const imageCategory_id = req.query.imageCategory_id as string;

        const updateImage = new UpdateImageCategoryService();
        const findImage = new FindUniqueImageCategoryService();

        const imagesUpdateCateg = await findImage.execute({
            imageCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imagesUpdateCateg.image);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: image } = req.file;

            const updateBanner = await updateImage.execute({
                imageCategory_id,
                image,
            });

            return res.json([imagesUpdateCateg, updateBanner]);

        }

    }
}

export { UpdateImageCategoryController }