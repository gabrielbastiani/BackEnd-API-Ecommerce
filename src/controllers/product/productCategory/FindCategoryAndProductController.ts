import { Request, Response } from 'express';
import { FindCategoryAndProductService } from '../../../services/product/productCategory/FindCategoryAndProductService';

class FindCategoryAndProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        const name = req.query.name as string;

        const findsRelations = new FindCategoryAndProductService();

        const finds = await findsRelations.execute({ name, product_id });

        return res.json(finds);
    }
}

export { FindCategoryAndProductController }