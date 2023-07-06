import { Request, Response } from 'express';
import { FindMainCategoryProductService } from '../../../services/product/productCategory/FindMainCategoryProductService';

class FindMainCategoryProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const findsRelations = new FindMainCategoryProductService();

        const finds = await findsRelations.execute({ product_id });

        return res.json(finds);
    }
}

export { FindMainCategoryProductController }