import { Request, Response } from 'express';
import { UpdateImageFiltroAtributoService } from '../../../../services/filtros/atributoFilter/imagesFilterAtributos/UpdateImageFiltroAtributoService';
import { ListExactImageFiltroAtributoService } from '../../../../services/filtros/atributoFilter/imagesFilterAtributos/ListExactImageFiltroAtributoService';
import fs from 'fs';

class UpdateImageFiltroAtributoController {
    async handle(req: Request, res: Response) {
        const imageFilterAtributo_id = req.query.imageFilterAtributo_id as string;

        const updateImage = new UpdateImageFiltroAtributoService();
        const removeImage = new ListExactImageFiltroAtributoService();

        const imageUpdateAtributo = await removeImage.execute({
            imageFilterAtributo_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageUpdateAtributo.imageAttribute);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageAttribute } = req.file;

            const updateImages = await updateImage.execute({
                imageFilterAtributo_id,
                imageAttribute,
            });

            return res.json([imageUpdateAtributo, updateImages]);

        }

    }
}

export { UpdateImageFiltroAtributoController }