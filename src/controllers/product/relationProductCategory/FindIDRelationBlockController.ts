import { Request, Response } from 'express';
import { FindIDRelationBlockService } from '../../../services/product/relationProductCategory/FindIDRelationBlockService';

class FindIDRelationBlockController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindIDRelationBlockService();

        const relationProductCategory_id = req.query.relationProductCategory_id as string;

        const finds = await findsRelations.execute({ relationProductCategory_id });

        return res.json(finds);
    }
}

export { FindIDRelationBlockController }