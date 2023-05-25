import { Request, Response } from 'express';
import { ListAllImageStoreService } from '../../../services/store/imageStore/ListAllImageStoreService';

class ListAllImageStoreController {
    async handle(req: Request, res: Response) {
        const slugPosition = req.query.slugPosition as string;

        const listImages = new ListAllImageStoreService();

        const images = await listImages.execute({ slugPosition });

        return res.json(images);
    }
}

export { ListAllImageStoreController }