import { Request, Response } from 'express';
import { FindUniqueRelationProductCategoryService } from '../../../services/product/productCategory/FindUniqueRelationProductCategoryService';

class FindUniqueRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const productCategory_id = req.query.productCategory_id as string;

        const findsRelations = new FindUniqueRelationProductCategoryService();

        const finds = await findsRelations.execute({ productCategory_id });

        return res.json(finds);
    }
}

export { FindUniqueRelationProductCategoryController }