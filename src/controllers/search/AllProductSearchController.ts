import { Request, Response } from 'express';
import { AllProductSearchService } from '../../services/search/AllProductSearchService';

class AllProductSearchController {
    async handle(req: Request, res: Response) {
        const { search } = req.query;

        const listProducts = new AllProductSearchService();

        const searchProducts = await listProducts.execute({ search });

        return res.json(searchProducts);
    }
}

export { AllProductSearchController }