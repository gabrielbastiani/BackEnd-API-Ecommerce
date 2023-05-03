import { Request, Response } from 'express';
import { FindIDRelationBlockAtributoService } from '../../../services/atributo/relationProductAtributo/FindIDRelationBlockAtributoService';

class FindIDRelationBlockAtributoController {
    async handle(req: Request, res: Response) {
        const relationProductAtributo_id = req.query.relationProductAtributo_id as string;

        const findsRelations = new FindIDRelationBlockAtributoService();

        const finds = await findsRelations.execute({ relationProductAtributo_id });

        return res.json(finds);
    }
}

export { FindIDRelationBlockAtributoController }