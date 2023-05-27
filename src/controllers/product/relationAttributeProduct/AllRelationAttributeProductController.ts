import { Request, Response } from 'express';
import { AllRelationAttributeProductService } from '../../../services/product/relationAttributeProduct/AllRelationAttributeProductService';

class AllRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listProducts = new AllRelationAttributeProductService();

        const productsAttributes = await listProducts.execute({ product_id });

        return res.json(productsAttributes);
    }
}

export { AllRelationAttributeProductController }