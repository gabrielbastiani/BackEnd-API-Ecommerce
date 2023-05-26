import { Request, Response } from 'express';
import { UpdateNameProductCategoryService } from '../../../services/product/productCategory/UpdateNameProductCategoryService';

class UpdateNameProductCategoryController {
  async handle(req: Request, res: Response) {
    const productCategory_id = req.query.productCategory_id as string;

    const { name } = req.body;

    const updateRelation = new UpdateNameProductCategoryService();

    const relation = await updateRelation.execute({ productCategory_id, name });

    return res.json(relation);

  }
}

export { UpdateNameProductCategoryController }