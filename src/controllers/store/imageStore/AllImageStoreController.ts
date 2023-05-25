import { Request, Response } from 'express';
import { AllImageStoreService } from '../../../services/store/imageStore/AllImageStoreService';

class AllImageStoreController {
    async handle(req: Request, res: Response) {

        const listAllPhotos = new AllImageStoreService();

        const images = await listAllPhotos.execute();

        return res.json(images);
    }
}

export { AllImageStoreController }