import { Request, Response } from 'express';
import { UpdateRelationIDProductCategoryService } from '../../services/relationProductCategory/UpdateRelationIDProductCategoryService';

class UpdateRelationIDProductCategoryController {
  async handle(req: Request, res: Response) {
    const relationProductCategory_id = req.query.relationProductCategory_id as string;

    const { relationId } = req.body;

    const updateRelation = new UpdateRelationIDProductCategoryService();

    const relation = await updateRelation.execute({ relationProductCategory_id, relationId });

    return res.json(relation);
    
  }
}

export { UpdateRelationIDProductCategoryController }