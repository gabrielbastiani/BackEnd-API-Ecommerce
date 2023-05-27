import { Request, Response } from 'express';
import { AllVariationProductService } from '../../services/variation/AllVariationProductService';

class AllVariationProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listVariation = new AllVariationProductService();

        const variationProduct = await listVariation.execute({ product_id });

        return res.json(variationProduct);
    }
}

export { AllVariationProductController }