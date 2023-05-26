import { Request, Response } from 'express';
import { DeleteAllProductCategoryService } from '../../../services/product/productCategory/DeleteAllProductCategoryService';

class DeleteAllProductCategoryController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const deleteAll = new DeleteAllProductCategoryService();

        const all = await deleteAll.execute({ product_id });

        return res.json(all);
    }
}

export { DeleteAllProductCategoryController }