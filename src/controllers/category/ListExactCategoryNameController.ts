import { Request, Response } from 'express';
import { ListExactCategoryNameService } from '../../services/category/ListExactCategoryNameService';

class ListExactCategoryNameController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;
        const listExactCategory = new ListExactCategoryNameService();
        const category = await listExactCategory.execute({ slug });

        return res.json(category);
    }
}

export { ListExactCategoryNameController }