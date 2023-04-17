import { Request, Response } from 'express';
import { FindCategoryIDRelationService } from '../../services/relationProductCategory/FindCategoryIDRelationService';

class FindCategoryIDRelationController {
    async handle(req: Request, res: Response) {
        const { category_id, product_id } = req.query;
        const findsRelations = new FindCategoryIDRelationService();

        const finds = await findsRelations.execute({ category_id, product_id });

        return res.json(finds);
    }
}

export { FindCategoryIDRelationController }