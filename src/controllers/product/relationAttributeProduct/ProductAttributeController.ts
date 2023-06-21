import { Request, Response } from 'express';
import { ProductAttributeService } from '../../../services/product/relationAttributeProduct/ProductAttributeService';

class ProductAttributeController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listProducts = new ProductAttributeService();

        const productsAttributes = await listProducts.execute({ product_id });

        return res.json(productsAttributes);
    }
}

export { ProductAttributeController }