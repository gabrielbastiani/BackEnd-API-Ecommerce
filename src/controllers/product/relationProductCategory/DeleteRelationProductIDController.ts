import { Request, Response } from 'express';
import { DeleteRelationProductIDService } from '../../../services/product/relationProductCategory/DeleteRelationProductIDService';

class DeleteRelationProductIDController {
    async handle(req: Request, res: Response) {
        const { product_id } = req.query;

        const findsRelations = new DeleteRelationProductIDService();

        const finds = await findsRelations.execute({ product_id });

        return res.json(finds);
    }
}

export { DeleteRelationProductIDController }