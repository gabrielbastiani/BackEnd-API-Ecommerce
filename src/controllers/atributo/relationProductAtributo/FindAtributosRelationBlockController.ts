import { Request, Response } from 'express';
import { FindAtributoRelationBlockService } from '../../../services/atributo/relationProductAtributo/FindAtributoRelationBlockService';

class FindAtributosRelationBlockController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindAtributoRelationBlockService();

        const product_id = req.query.product_id as string;

        const finds = await findsRelations.execute({ product_id });

        return res.json(finds);
    }
}

export { FindAtributosRelationBlockController }