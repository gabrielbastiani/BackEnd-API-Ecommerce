import { Request, Response } from 'express';
import { AllVariationsProductService } from '../../../services/product/productVariation/AllVariationsProductService';

class AllVariationsProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listVariation = new AllVariationsProductService();

        const variation = await listVariation.execute({ product_id });

        return res.json(variation);
    }
}

export { AllVariationsProductController }