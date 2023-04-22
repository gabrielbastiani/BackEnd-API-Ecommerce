import { Request, Response } from 'express';
import { UpdateOrderProductCategoryService } from '../../../services/product/relationProductCategory/UpdateOrderProductCategoryService';

class UpdateOrderProductCategoryController {
  async handle(req: Request, res: Response) {
    const relationProductCategory_id = req.query.relationProductCategory_id as string;

    const { order } = req.body;

    const updateRelation = new UpdateOrderProductCategoryService();

    const relation = await updateRelation.execute({ relationProductCategory_id, order });

    return res.json(relation);
    
  }
}

export { UpdateOrderProductCategoryController }