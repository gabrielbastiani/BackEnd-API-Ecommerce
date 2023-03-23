import { Request, Response } from 'express';
import { FirstPhotoProductInStoreService } from '../../../services/product/photoproduct/FirstPhotoProductInStoreService';

class FirstPhotoProductInStoreController {
    async handle(req: Request, res: Response) {
        
        const listPhotosProducts = new FirstPhotoProductInStoreService();

        const productsPhotos = await listPhotosProducts.execute();

        return res.json(productsPhotos);
    }
}

export { FirstPhotoProductInStoreController }