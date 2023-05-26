import { Request, Response } from 'express';
import { DeleteRelationProductCategoryService } from '../../../services/product/productCategory/DeleteRelationProductCategoryService';

class DeleteRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const { parentId } = req.query;

        const findsRelations = new DeleteRelationProductCategoryService();

        const finds = await findsRelations.execute({ parentId });

        return res.json(finds);
    }
}

export { DeleteRelationProductCategoryController }