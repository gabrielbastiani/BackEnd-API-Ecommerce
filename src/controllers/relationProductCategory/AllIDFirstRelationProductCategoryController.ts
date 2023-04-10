import { Request, Response } from 'express';
import { AllIDRelationProductCategoryService } from '../../services/relationProductCategory/AllIDRelationProductCategoryService';

class AllIDFirstRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const relationId = req.query.relationId as string;
        
        const listAllRelations = new AllIDRelationProductCategoryService();

        const relations = await listAllRelations.execute({ relationId });

        return res.json(relations);
    }
}

export { AllIDFirstRelationProductCategoryController }