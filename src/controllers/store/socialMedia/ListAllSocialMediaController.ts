import { Request, Response } from 'express';
import { ListAllSocialMediaService } from '../../../services/store/socialMedia/ListAllSocialMediaService';

class ListAllSocialMediaController {
    async handle(req: Request, res: Response) {
        const listAllMedias = new ListAllSocialMediaService();
        const allMedia = await listAllMedias.execute();

        return res.json(allMedia);
    }
}

export { ListAllSocialMediaController }