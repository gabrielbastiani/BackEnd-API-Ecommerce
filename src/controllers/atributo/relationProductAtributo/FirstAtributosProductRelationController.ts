import { Request, Response } from 'express';
import { FirstAtributosProductRelationService } from '../../../services/atributo/relationProductAtributo/FirstAtributosProductRelationService';

class FirstAtributosProductRelationController {
    async handle(req: Request, res: Response) {
        const variacao_id = req.query.variacao_id as string;
        
        const listProducts = new FirstAtributosProductRelationService();

        const product = await listProducts.execute({ variacao_id });

        return res.json(product);
    }
}

export { FirstAtributosProductRelationController }