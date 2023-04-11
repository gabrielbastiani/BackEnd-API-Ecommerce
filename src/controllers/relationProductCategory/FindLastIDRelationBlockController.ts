import { Request, Response } from 'express';
import { FindLastIDRelationBlockService } from '../../services/relationProductCategory/FindLastIDRelationBlockService';

class FindLastIDRelationBlockController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindLastIDRelationBlockService();

        const relationId = req.query.relationId as string;

        const finds = await findsRelations.execute({ relationId });

        return res.json(finds);
    }
}

export { FindLastIDRelationBlockController }