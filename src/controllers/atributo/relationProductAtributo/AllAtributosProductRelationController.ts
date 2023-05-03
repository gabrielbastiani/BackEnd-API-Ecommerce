import { Request, Response } from 'express';
import { AllAtributosProductRelationService } from '../../../services/atributo/relationProductAtributo/AllAtributosProductRelationService';

class AllAtributosProductRelationController {
    async handle(req: Request, res: Response) {
        const variacao_id = req.query.variacao_id as string;
        
        const listProducts = new AllAtributosProductRelationService();

        const productsPhotos = await listProducts.execute({ variacao_id });

        return res.json(productsPhotos);
    }
}

export { AllAtributosProductRelationController }