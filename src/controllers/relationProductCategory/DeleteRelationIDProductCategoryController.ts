import { Request, Response } from 'express';
import { DeleteRelationIDProductCategoryService } from '../../services/relationProductCategory/DeleteRelationIDProductCategoryService';

class DeleteRelationIDProductCategoryController {
    async handle(req: Request, res: Response) {
        const findsRelations = new DeleteRelationIDProductCategoryService();

        const relationProductCategory_id = req.query.relationProductCategory_id as string;

        const finds = await findsRelations.execute({ relationProductCategory_id });

        return res.json(finds);
    }
}

export { DeleteRelationIDProductCategoryController }