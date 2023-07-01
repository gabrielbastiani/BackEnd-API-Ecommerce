import { Request, Response } from 'express';
import { ProductsCategoriesService } from '../../../services/product/productCategory/ProductsCategoriesService';

class ProductsCategoriesController {
    async handle(req: Request, res: Response) {
        const categoriesProducts = new ProductsCategoriesService();

        const slug = req.query.slug as string;

        const products = await categoriesProducts.execute({ slug });

        return res.json(products);
    }
}

export { ProductsCategoriesController }