import { Request, Response } from 'express';
import { ProductsPageCategoriesService } from '../../../services/product/productCategory/ProductsPageCategoriesService';

class ProductsPageCategoriesController {
    async handle(req: Request, res: Response) {
        const categoriesProducts = new ProductsPageCategoriesService();

        const { page, limit, slug } = req.query;

        const products = await categoriesProducts.execute( Number(page), Number(limit), String(slug) );

        return res.json(products);
    }
}

export { ProductsPageCategoriesController }