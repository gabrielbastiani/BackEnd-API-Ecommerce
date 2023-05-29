import { Request, Response } from 'express';
import { DeleteImageFilterCategoryService } from '../../../../services/groupFilter/filterCategory/imageFilterCategory/DeleteImageFilterCategoryService';
import { FindUniqueImageFilterCategoryService } from '../../../../services/groupFilter/filterCategory/imageFilterCategory/FindUniqueImageFilterCategoryService';
import fs from 'fs';

class DeleteImageFilterCategoryController {
    async handle(req: Request, res: Response) {
        const imageFilterCategory_id = req.query.imageFilterCategory_id as string;

        const deleteimage = new DeleteImageFilterCategoryService();
        const findImage = new FindUniqueImageFilterCategoryService();

        const imageDelete = await findImage.execute({
            imageFilterCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageDelete.imageCategory);

        const imagesDelete = await deleteimage.execute({
            imageFilterCategory_id,
        });

        return res.json([imageDelete, imagesDelete]);

    }
}

export { DeleteImageFilterCategoryController }