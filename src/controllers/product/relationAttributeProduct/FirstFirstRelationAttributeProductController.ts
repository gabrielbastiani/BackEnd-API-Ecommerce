import { Request, Response } from 'express';
import { FirstFirstRelationAttributeProductService } from '../../../services/product/relationAttributeProduct/FirstFirstRelationAttributeProductService';

class FirstFirstRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listProducts = new FirstFirstRelationAttributeProductService();

        const product = await listProducts.execute({ product_id });

        return res.json(product);
    }
}

export { FirstFirstRelationAttributeProductController }