import { Request, Response } from 'express';
import { UpdateRelationIDProductCategoryService } from '../../../services/product/productCategory/UpdateRelationIDProductCategoryService';

class UpdateRelationIDProductCategoryController {
  async handle(req: Request, res: Response) {
    const relationProductCategory_id = req.query.relationProductCategory_id as string;

    const { parentId } = req.body;

    const updateRelation = new UpdateRelationIDProductCategoryService();

    const relation = await updateRelation.execute({ relationProductCategory_id, parentId });

    return res.json(relation);
    
  }
}

export { UpdateRelationIDProductCategoryController }