import { Request, Response } from 'express';
import { DeleteRelationProductCategoryService } from '../../../services/product/relationProductCategory/DeleteRelationProductCategoryService';

class DeleteRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const { relationId } = req.query;

        const findsRelations = new DeleteRelationProductCategoryService();

        const finds = await findsRelations.execute({ relationId });

        return res.json(finds);
    }
}

export { DeleteRelationProductCategoryController }