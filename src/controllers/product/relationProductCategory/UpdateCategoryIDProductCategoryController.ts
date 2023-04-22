import { Request, Response } from 'express';
import { UpdateCategoryIDProductCategoryService } from '../../../services/product/relationProductCategory/UpdateCategoryIDProductCategoryService';

class UpdateCategoryIDProductCategoryController {
  async handle(req: Request, res: Response) {
    const relationProductCategory_id = req.query.relationProductCategory_id as string;

    const { category_id } = req.body;

    const updateRelation = new UpdateCategoryIDProductCategoryService();

    const relation = await updateRelation.execute({ relationProductCategory_id, category_id });

    return res.json(relation);
    
  }
}

export { UpdateCategoryIDProductCategoryController }