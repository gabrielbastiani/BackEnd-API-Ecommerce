import { Request, Response } from 'express';
import { AllProductService } from '../../services/product/AllProductService';

class AllProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        
        const listProducts = new AllProductService();

        const productsPhotos = await listProducts.execute({ product_id });

        return res.json(productsPhotos);
    }
}

export { AllProductController }