import { Request, Response } from 'express';
import { AllVariacoesProductService } from '../../services/variacao/AllVariacoesProductService';

class AllVariacoesProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        
        const listVariacoesProduct = new AllVariacoesProductService();

        const variacoesProducts = await listVariacoesProduct.execute({ product_id });

        return res.json(variacoesProducts);
    }
}

export { AllVariacoesProductController }