import { Request, Response } from 'express';
import { DeleteRelationProductCategoryService } from '../../services/relationProductCategory/DeleteRelationProductCategoryService';

class DeleteRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const findsRelations = new DeleteRelationProductCategoryService();

        /* const relationProductCategory_id = req.query.relationProductCategory_id as string; */
        const relationId = req.query.relationId as string;

        const finds = await findsRelations.execute({ /* relationProductCategory_id, */ relationId });

        return res.json(finds);
    }
}

export { DeleteRelationProductCategoryController }