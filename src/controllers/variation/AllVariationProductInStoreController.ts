import { Request, Response } from 'express';
import { AllVariationProductInStoreService } from '../../services/variation/AllVariationProductInStoreService';

class AllVariationProductInStoreController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listVariation = new AllVariationProductInStoreService();

        const variationProduct = await listVariation.execute({ product_id });

        return res.json(variationProduct);
    }
}

export { AllVariationProductInStoreController }