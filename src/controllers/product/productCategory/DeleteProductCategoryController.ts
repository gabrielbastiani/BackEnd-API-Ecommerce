import { Request, Response } from 'express';
import { DeleteProductCategoryService } from '../../../services/product/productCategory/DeleteProductCategoryService';

class DeleteProductCategoryController {
    async handle(req: Request, res: Response) {
        const productCategory_id = req.query.productCategory_id as string;

        const categoryDelete = new DeleteProductCategoryService();

        const deletes = await categoryDelete.execute({ productCategory_id });

        return res.json(deletes);
    }
}

export { DeleteProductCategoryController }