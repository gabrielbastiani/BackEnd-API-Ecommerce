import { Request, Response } from 'express';
import { UpdateImageSocialMediaService } from '../../../services/store/socialMedia/UpdateImageSocialMediaService';
import { FindUniqueSocialMediaService } from '../../../services/store/socialMedia/FindUniqueSocialMediaService';
import fs from 'fs';

class UpdateImageRedeSocialController {
    async handle(req: Request, res: Response) {
        const socialMedia_id = req.query.socialMedia_id as string;

        const updatePhoto = new UpdateImageSocialMediaService();
        const findImage = new FindUniqueSocialMediaService();

        const imageMedia = await findImage.execute({
            socialMedia_id
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageMedia.image);

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { originalname, filename: image } = req.file;

            const updateImage = await updatePhoto.execute({
                socialMedia_id,
                image,
            });

            return res.json([imageMedia, updateImage]);

        }

    }
}

export { UpdateImageRedeSocialController }