import { Request, Response } from 'express';
import { UpdateImageAtributoFiltroGroupService } from '../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/UpdateImageAtributoFiltroGroupService';
import { ListExactImageAtributoFiltroGroupService } from '../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/ListExactImageAtributoFiltroGroupService';
import fs from 'fs';

class UpdateImageAtributoFiltroGroupController {
    async handle(req: Request, res: Response) {
        const imageAtributoGroup_id = req.query.imageAtributoGroup_id as string;

        const updateImage = new UpdateImageAtributoFiltroGroupService();
        const removeImage = new ListExactImageAtributoFiltroGroupService();

        const imageUpdateFiltro = await removeImage.execute({
            imageAtributoGroup_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageUpdateFiltro.imageAtributo);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageAtributo } = req.file;

            const updateImages = await updateImage.execute({
                imageAtributoGroup_id,
                imageAtributo,
            });

            return res.json([imageUpdateFiltro, updateImages]);

        }

    }
}

export { UpdateImageAtributoFiltroGroupController }