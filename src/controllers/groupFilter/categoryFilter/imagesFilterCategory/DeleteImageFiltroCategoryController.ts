import { Request, Response } from 'express';
import { DeleteImageFiltroCategoryService } from '../../../../services/filtros/categoryFilter/imagesFilterCategory/DeleteImageFiltroCategoryService';
import { ListExactImageFiltroCategoryService } from '../../../../services/filtros/categoryFilter/imagesFilterCategory/ListExactImageFiltroCategoryService';
import fs from 'fs';

class DeleteImageFiltroCategoryController {
    async handle(req: Request, res: Response) {
        const imageFilterCategory_id = req.query.imageFilterCategory_id as string;

        const updateImage = new DeleteImageFiltroCategoryService();
        const removeImage = new ListExactImageFiltroCategoryService();

        const imageDelete = await removeImage.execute({
            imageFilterCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageDelete.imageCategory);

        const updateImages = await updateImage.execute({
            imageFilterCategory_id,
        });

        return res.json([imageDelete, updateImages]);

    }
}

export { DeleteImageFiltroCategoryController }