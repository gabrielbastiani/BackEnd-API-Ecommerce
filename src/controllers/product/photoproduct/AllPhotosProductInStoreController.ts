import { Request, Response } from 'express';
import { AllPhotosProductInStoreService } from '../../../services/product/photoproduct/AllPhotosProductInStoreService';

class AllPhotosProductInStoreController {
    async handle(req: Request, res: Response) {
        
        const listPhotosProducts = new AllPhotosProductInStoreService();

        const productsPhotos = await listPhotosProducts.execute();

        return res.json(productsPhotos);
    }
}

export { AllPhotosProductInStoreController }