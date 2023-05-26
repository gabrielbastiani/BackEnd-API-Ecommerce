import { Request, Response } from 'express';
import { AllPhotosProductService } from '../../../services/product/photoProduct/AllPhotosProductService';

class AllPhotosProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        
        const listPhotosProducts = new AllPhotosProductService();

        const productsPhotos = await listPhotosProducts.execute({ product_id });

        return res.json(productsPhotos);
    }
}

export { AllPhotosProductController }