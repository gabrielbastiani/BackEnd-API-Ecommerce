import { Request, Response } from 'express';
import { ExactPageListAllProductService } from '../../services/product/ExactPageListAllProductService';

class ExactPageListAllProductController {
    async handle(req: Request, res: Response) {
        const pageListAllProductService = new ExactPageListAllProductService();

        const { page, limit, category_id } = req.query;

        const productPage = await pageListAllProductService.execute(Number(page), Number(limit), String(category_id));

        return res.json(productPage);
    }
}

export { ExactPageListAllProductController }