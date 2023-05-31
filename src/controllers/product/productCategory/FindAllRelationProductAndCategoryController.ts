import { Request, Response } from 'express';
import { FindAllRelationProductAndCategoryService } from '../../../services/product/productCategory/FindAllRelationProductAndCategoryService';

class FindAllRelationProductAndCategoryController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const findsRelations = new FindAllRelationProductAndCategoryService();

        const finds = await findsRelations.execute({ product_id });

        return res.json(finds);
    }
}

export { FindAllRelationProductAndCategoryController }