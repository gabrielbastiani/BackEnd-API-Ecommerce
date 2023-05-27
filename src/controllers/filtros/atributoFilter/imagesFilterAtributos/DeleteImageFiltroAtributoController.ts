import { Request, Response } from 'express';
import { DeleteImageFiltroAtributoService } from '../../../../services/filtros/atributoFilter/imagesFilterAtributos/DeleteImageFiltroAtributoService';
import { ListExactImageFiltroAtributoService } from '../../../../services/filtros/atributoFilter/imagesFilterAtributos/ListExactImageFiltroAtributoService';
import fs from 'fs';

class DeleteImageFiltroAtributoController {
    async handle(req: Request, res: Response) {
        const imageFilterAtributo_id = req.query.imageFilterAtributo_id as string;

        const updateImage = new DeleteImageFiltroAtributoService();
        const removeImage = new ListExactImageFiltroAtributoService();

        const imageDelete = await removeImage.execute({
            imageFilterAtributo_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageDelete.imageAttribute);

        const updateImages = await updateImage.execute({
            imageFilterAtributo_id,
        });

        return res.json([imageDelete, updateImages]);

    }
}

export { DeleteImageFiltroAtributoController }