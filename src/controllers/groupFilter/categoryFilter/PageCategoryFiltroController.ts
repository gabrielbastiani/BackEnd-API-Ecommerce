import { Request, Response } from 'express';
import { PageCategoryFiltroService } from '../../../services/filtros/categoryFilter/PageCategoryFiltroService';

class PageCategoryFiltroController {
    async handle(req: Request, res: Response) {
        const pagesCategoies = new PageCategoryFiltroService();

        const { page, limit } = req.query;

        const categories = await pagesCategoies.execute(Number(page), Number(limit));

        return res.json(categories);
    }
}

export { PageCategoryFiltroController }