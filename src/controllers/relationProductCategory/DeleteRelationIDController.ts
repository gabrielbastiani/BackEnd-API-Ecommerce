import { Request, Response } from 'express';
import { DeleteRelationIDService } from '../../services/relationProductCategory/DeleteRelationIDService';

class DeleteRelationIDController {
    async handle(req: Request, res: Response) {
        const findsRelations = new DeleteRelationIDService();

        const relationProductCategory_id = req.query.relationProductCategory_id as string;

        const finds = await findsRelations.execute({ relationProductCategory_id });

        return res.json(finds);
    }
}

export { DeleteRelationIDController }