import { Request, Response } from 'express';
import { FindCategorysRelationService } from '../../../services/product/relationProductCategory/FindCategorysRelationService';

class FindCategorysRelationController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindCategorysRelationService();

        const finds = await findsRelations.execute();

        return res.json(finds);
    }
}

export { FindCategorysRelationController }