import { Request, Response } from 'express';
import { FindFirstProductCategoryService } from '../../../services/product/productCategory/FindFirstProductCategoryService';

class FindFirstProductCategoryController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;

        const findsRelations = new FindFirstProductCategoryService();

        const finds = await findsRelations.execute({ slug });

        return res.json(finds);
    }
}

export { FindFirstProductCategoryController }