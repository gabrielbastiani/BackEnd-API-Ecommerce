import { Request, Response } from 'express';
import { FindAllExactRelationBlockService } from '../../../services/product/relationProductCategory/FindAllExactRelationBlockService';

class FindAllExactRelationBlocController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindAllExactRelationBlockService();

        const relationProductCategory_id = req.query.relationProductCategory_id as string;

        const finds = await findsRelations.execute({ relationProductCategory_id });

        return res.json(finds);
    }
}

export { FindAllExactRelationBlocController }