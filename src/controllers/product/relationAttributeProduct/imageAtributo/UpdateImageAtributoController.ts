import { Request, Response } from 'express';
import { UpdateImageAtributoService } from '../../../services/atributo/imageAtributo/UpdateImageAtributoService';
import { ListExactImageAtributoService } from '../../../services/atributo/imageAtributo/ListExactImageAtributoService';
import fs from 'fs';

class UpdateImageAtributoController {
    async handle(req: Request, res: Response) {
        const imageAtributo_id = req.query.imageAtributo_id as string;

        const updateImage = new UpdateImageAtributoService();
        const removeImage = new ListExactImageAtributoService();

        const imageUpdateAtributo = await removeImage.execute({
            imageAtributo_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageUpdateAtributo.imageAtributo);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageAtributo } = req.file;

            const updateImages = await updateImage.execute({
                imageAtributo_id,
                imageAtributo,
            });

            return res.json([imageUpdateAtributo, updateImages]);

        }

    }
}

export { UpdateImageAtributoController }