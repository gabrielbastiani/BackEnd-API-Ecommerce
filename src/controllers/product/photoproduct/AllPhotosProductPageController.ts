import { Request, Response } from 'express';
import { AllPhotosProductPageService } from '../../../services/product/photoproduct/AllPhotosProductPageService';

class AllPhotosProductPageController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        
        const listPhotosProducts = new AllPhotosProductPageService();

        const productsPhotos = await listPhotosProducts.execute({ product_id });

        return res.json(productsPhotos);
    }
}

export { AllPhotosProductPageController }