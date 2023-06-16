import { Request, Response } from 'express';
import { ProductsAndAttributeService } from '../../../services/product/relationAttributeProduct/ProductsAndAttributeService';

class ProductsAndAttributeController {
    async handle(req: Request, res: Response) {

        const { product_id } = req.query;

        const listProducts = new ProductsAndAttributeService();

        const productsAttributes = await listProducts.execute({ product_id });

        return res.json(productsAttributes);
    }
}

export { ProductsAndAttributeController }