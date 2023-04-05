import { Request, Response } from 'express';
import { UpdateImageRedeSocialService } from '../../../services/loja/redeSocial/UpdateImageRedeSocialService';
import { RemoveImageRedeSocialService } from '../../../services/loja/redeSocial/RemoveImageRedeSocialService';
import fs from 'fs';

class UpdateImageRedeSocialController {
    async handle(req: Request, res: Response) {
        const redesocial_id = req.query.redesocial_id as string;

        const updatePhoto = new UpdateImageRedeSocialService();
        const deletePhoto = new RemoveImageRedeSocialService();

        const imageRedes = await deletePhoto.execute({
            redesocial_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageRedes.imageRede);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: imageRede } = req.file;

            const updateBanner = await updatePhoto.execute({
                redesocial_id,
                imageRede,
            });

            return res.json([imageRedes, updateBanner]);

        }

    }
}

export { UpdateImageRedeSocialController }