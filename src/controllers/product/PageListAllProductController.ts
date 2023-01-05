import { Request, Response } from 'express';
import { PageListAllProductService } from '../../services/product/PageListAllProductService';

class PageListAllProductController {
    async handle(req: Request, res: Response) {
        const pageListAllProductService = new PageListAllProductService();

        const { page, limit } = req.query;

        const productPage = await pageListAllProductService.execute(Number(page), Number(limit));

        return res.json(productPage);
    }
}

export { PageListAllProductController }