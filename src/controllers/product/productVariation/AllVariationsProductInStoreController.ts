import { Request, Response } from 'express';
import { AllVariationsProductInStoreService } from '../../../services/product/productVariation/AllVariationsProductInStoreService';

class AllVariationsProductInStoreController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listVariation = new AllVariationsProductInStoreService();

        const variation = await listVariation.execute({ product_id });

        return res.json(variation);
    }
}

export { AllVariationsProductInStoreController }