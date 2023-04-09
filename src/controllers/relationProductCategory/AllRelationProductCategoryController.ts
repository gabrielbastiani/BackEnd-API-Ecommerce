import { Request, Response } from 'express';
import { AllRelationProductCategoryService } from '../../services/relationProductCategory/AllRelationProductCategoryService';

class AllRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        
        const listAllRelations = new AllRelationProductCategoryService();

        const relations = await listAllRelations.execute({ product_id });

        return res.json(relations);
    }
}

export { AllRelationProductCategoryController }