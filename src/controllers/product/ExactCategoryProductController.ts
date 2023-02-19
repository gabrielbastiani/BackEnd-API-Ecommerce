import { Request, Response } from 'express';
import { ExactCategoryProductService } from '../../services/product/ExactCategoryProductService';

class ExactCategoryProductController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;
        
        const listeProductCategory = new ExactCategoryProductService();

        const productCategory = await listeProductCategory.execute({ category_id });

        return res.json(productCategory);
    }
}

export { ExactCategoryProductController }