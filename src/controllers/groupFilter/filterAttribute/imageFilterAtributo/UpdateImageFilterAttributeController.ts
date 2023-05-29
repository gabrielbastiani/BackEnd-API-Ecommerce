import { Request, Response } from 'express';
import { UpdateImageFilterAttributeService } from '../../../../services/groupFilter/filterAttribute/imageFilterAtributo/UpdateImageFilterAttributeService';
import { FindUniqueImageFilterAttributeService } from '../../../../services/groupFilter/filterAttribute/imageFilterAtributo/FindUniqueImageFilterAttributeService';
import fs from 'fs';

class UpdateImageFilterAttributeController {
    async handle(req: Request, res: Response) {
        const imageFilterAttribute_id = req.query.imageFilterAttribute_id as string;

        const updateImage = new UpdateImageFilterAttributeService();
        const findImage = new FindUniqueImageFilterAttributeService();

        const imageUpdate = await findImage.execute({
            imageFilterAttribute_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageUpdate.imageAttribute);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageAttribute } = req.file;

            const updateImages = await updateImage.execute({
                imageFilterAttribute_id,
                imageAttribute,
            });

            return res.json([imageUpdate, updateImages]);

        }

    }
}

export { UpdateImageFilterAttributeController }