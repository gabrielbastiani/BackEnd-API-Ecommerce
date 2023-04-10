import { Request, Response } from 'express';
import { FindCategoryRelationBlockService } from '../../services/relationProductCategory/FindCategoryRelationBlockService';

class FindCategoryRelationBlockController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindCategoryRelationBlockService();

        const product_id = req.query.product_id as string;

        const finds = await findsRelations.execute({ product_id });

        return res.json(finds);
    }
}

export { FindCategoryRelationBlockController }