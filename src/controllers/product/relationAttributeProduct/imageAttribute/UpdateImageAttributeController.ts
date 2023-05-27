import { Request, Response } from 'express';
import { UpdateImageAttributeService } from '../../../../services/product/relationAttributeProduct/imageAttribute/UpdateImageAttributeService';
import { FindUniqueImageAttributeService } from '../../../../services/product/relationAttributeProduct/imageAttribute/FindUniqueImageAttributeService';
import fs from 'fs';

class UpdateImageAttributeController {
    async handle(req: Request, res: Response) {
        const imageAttribute_id = req.query.imageAttribute_id as string;

        const updateImage = new UpdateImageAttributeService();
        const findImage = new FindUniqueImageAttributeService();

        const attribute = await findImage.execute({
            imageAttribute_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + attribute.image);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: image } = req.file;

            const updateImages = await updateImage.execute({
                imageAttribute_id,
                image,
            });

            return res.json([attribute, updateImages]);

        }

    }
}

export { UpdateImageAttributeController }