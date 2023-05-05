import { Request, Response } from 'express';
import { ProductsPageCategoriesService } from '../../../services/product/relationProductCategory/ProductsPageCategoriesService';

class ProductsPageCategoriesController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;

        const findsRelations = new ProductsPageCategoriesService();

        const finds = await findsRelations.execute({ slug });

        return res.json(finds);
    }
}

export { ProductsPageCategoriesController }