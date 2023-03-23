import { Request, Response } from 'express';
import { AllProductInStoreService } from '../../services/product/AllProductInStoreService';

class AllProductInStoreController {
    async handle(req: Request, res: Response) {
        
        const listProducts = new AllProductInStoreService();

        const productsPhotos = await listProducts.execute();

        return res.json(productsPhotos);
    }
}

export { AllProductInStoreController }