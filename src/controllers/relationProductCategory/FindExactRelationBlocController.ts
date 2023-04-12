import { Request, Response } from 'express';
import { FindExactRelationBlockService } from '../../services/relationProductCategory/FindExactRelationBlockService';

class FindExactRelationBlocController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindExactRelationBlockService();

        const relationProductCategory_id = req.query.relationProductCategory_id as string;

        const finds = await findsRelations.execute({ relationProductCategory_id });

        return res.json(finds);
    }
}

export { FindExactRelationBlocController }