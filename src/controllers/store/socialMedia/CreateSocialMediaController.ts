import { Request, Response } from 'express';
import { CreateSocialMediaService } from '../../../services/store/socialMedia/CreateSocialMediaService';

class CreateSocialMediaController {
    async handle(req: Request, res: Response) {
        const {
            name,
            link,
            order,
            position,
            slugPosition,
            store_id,
        } = req.body;

        const createSocialMedia = new CreateSocialMediaService();

        const { originalname, filename: image } = req.file;

        const store = await createSocialMedia.execute({
            name,
            image,
            link,
            order,
            position,
            slugPosition,
            store_id
        });

        return res.json(store)
    }
}

export { CreateSocialMediaController }