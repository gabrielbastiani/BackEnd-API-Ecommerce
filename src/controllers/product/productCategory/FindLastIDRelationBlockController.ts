import { Request, Response } from 'express';
import { FindLastIDRelationBlockService } from '../../../services/product/productCategory/FindLastIDRelationBlockService';

class FindLastIDRelationBlockController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindLastIDRelationBlockService();

        const parentId = req.query.parentId as string;

        const finds = await findsRelations.execute({ parentId });

        return res.json(finds);
    }
}

export { FindLastIDRelationBlockController }