import { Request, Response } from 'express';
import { DeleteImageFilterAttributeService } from '../../../../services/groupFilter/filterAttribute/imageFilterAtributo/DeleteImageFilterAttributeService';
import { FindUniqueImageFilterAttributeService } from '../../../../services/groupFilter/filterAttribute/imageFilterAtributo/FindUniqueImageFilterAttributeService';
import fs from 'fs';

class DeleteImageFilterAttributeController {
    async handle(req: Request, res: Response) {
        const imageFilterAttribute_id = req.query.imageFilterAttribute_id as string;

        const updateImage = new DeleteImageFilterAttributeService();
        const findImage = new FindUniqueImageFilterAttributeService();

        const imageDelete = await findImage.execute({
            imageFilterAttribute_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageDelete.imageAttribute);

        const updateImages = await updateImage.execute({
            imageFilterAttribute_id,
        });

        return res.json([imageDelete, updateImages]);

    }
}

export { DeleteImageFilterAttributeController }