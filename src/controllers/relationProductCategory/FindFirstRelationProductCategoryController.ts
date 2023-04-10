import { Request, Response } from 'express';
import { FindFirstRelationProductCategoryService } from '../../services/relationProductCategory/FindFirstRelationProductCategoryService';

class FindFirstRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        
        const listAllRelations = new FindFirstRelationProductCategoryService();

        const relations = await listAllRelations.execute({ product_id });

        return res.json(relations);
    }
}

export { FindFirstRelationProductCategoryController }