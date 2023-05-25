import { Request, Response } from 'express';
import { FindUniqueImageStoreService } from '../../../services/store/imageStore/FindUniqueImageStoreService';

class FindUniqueImageStoreController {
    async handle(req: Request, res: Response) {
        const imageStore_id = req.query.imageStore_id as string;
        const listExact = new FindUniqueImageStoreService();
        const images = await listExact.execute({ imageStore_id });

        return res.json(images);
    }
}

export { FindUniqueImageStoreController }