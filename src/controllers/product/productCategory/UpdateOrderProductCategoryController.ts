import { Request, Response } from 'express';
import { UpdateOrderProductCategoryService } from '../../../services/product/productCategory/UpdateOrderProductCategoryService';

class UpdateOrderProductCategoryController {
  async handle(req: Request, res: Response) {
    const productCategory_id = req.query.productCategory_id as string;

    const { order } = req.body;

    const updateRelation = new UpdateOrderProductCategoryService();

    const relation = await updateRelation.execute({ productCategory_id, order });

    return res.json(relation);
    
  }
}

export { UpdateOrderProductCategoryController }