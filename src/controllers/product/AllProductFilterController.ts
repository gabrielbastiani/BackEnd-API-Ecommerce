import { Request, Response } from 'express';
import { AllProductFilterService } from '../../services/product/AllProductFilterService';

class AllProductFilterController {
    async handle(req: Request, res: Response) {

        const listProducts = new AllProductFilterService();

        const productsPhotos = await listProducts.execute();

        return res.json(productsPhotos);
    }
}

export { AllProductFilterController }