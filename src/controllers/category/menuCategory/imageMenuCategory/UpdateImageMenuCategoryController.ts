import { Request, Response } from 'express';
import { UpdateImageMenuCategoryService } from '../../../../services/category/menuCategory/imageMenuCategory/UpdateImageMenuCategoryService';
import { FindUniqueImageMenuCategoryService } from '../../../../services/category/menuCategory/imageMenuCategory/FindUniqueImageMenuCategoryService';
import fs from 'fs';

class UpdateImageMenuCategoryController {
    async handle(req: Request, res: Response) {
        const imageMenuCategory_id = req.query.imageMenuCategory_id as string;

        const updateImage = new UpdateImageMenuCategoryService();
        const findImage = new FindUniqueImageMenuCategoryService();

        const imagesUpdateCateg = await findImage.execute({
            imageMenuCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imagesUpdateCateg.image);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: image } = req.file;

            const updateBanner = await updateImage.execute({
                imageMenuCategory_id,
                image,
            });

            return res.json([imagesUpdateCateg, updateBanner]);

        }

    }
}

export { UpdateImageMenuCategoryController }