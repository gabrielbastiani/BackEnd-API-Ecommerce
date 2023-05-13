import { Request, Response } from 'express';
import { UpdateImageFiltroCategoryService } from '../../../../services/filtros/categoryFilter/imagesFilterCategory/UpdateImageFiltroCategoryService';
import { ListExactImageFiltroCategoryService } from '../../../../services/filtros/categoryFilter/imagesFilterCategory/ListExactImageFiltroCategoryService';
import fs from 'fs';

class UpdateImageFiltroCategoryController {
    async handle(req: Request, res: Response) {
        const imageFilterCategory_id = req.query.imageFilterCategory_id as string;

        const updateImage = new UpdateImageFiltroCategoryService();
        const removeImage = new ListExactImageFiltroCategoryService();

        const imageUpdateAtributo = await removeImage.execute({
            imageFilterCategory_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageUpdateAtributo.imageCategory);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageCategory } = req.file;

            const updateImages = await updateImage.execute({
                imageFilterCategory_id,
                imageCategory,
            });

            return res.json([imageUpdateAtributo, updateImages]);

        }

    }
}

export { UpdateImageFiltroCategoryController }