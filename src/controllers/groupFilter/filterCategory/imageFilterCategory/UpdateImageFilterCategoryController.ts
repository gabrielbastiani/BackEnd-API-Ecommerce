import { Request, Response } from 'express';
import { UpdateImageFilterCategoryService } from '../../../../services/groupFilter/filterCategory/imageFilterCategory/UpdateImageFilterCategoryService';
import { FindUniqueImageFilterCategoryService } from '../../../../services/groupFilter/filterCategory/imageFilterCategory/FindUniqueImageFilterCategoryService';
import fs from 'fs';

class UpdateImageFilterCategoryController {
    async handle(req: Request, res: Response) {
        const imageFilterCategory_id = req.query.imageFilterCategory_id as string;

        const updateImage = new UpdateImageFilterCategoryService();
        const findImage = new FindUniqueImageFilterCategoryService();

        const images = await findImage.execute({
            imageFilterCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + images.imageCategory);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageCategory } = req.file;

            const updateImages = await updateImage.execute({
                imageFilterCategory_id,
                imageCategory,
            });

            return res.json([images, updateImages]);

        }

    }
}

export { UpdateImageFilterCategoryController }