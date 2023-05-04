import { Request, Response } from 'express';
import { FindFirstCategorySlugService } from '../../services/category/FindFirstCategorySlugService';

class FindFirstCategorySlugController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;

        const listCategoryFirst = new FindFirstCategorySlugService();

        const category = await listCategoryFirst.execute({ slug });

        return res.json(category);
    }
}

export { FindFirstCategorySlugController }