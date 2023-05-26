import { Request, Response } from 'express';
import { UpdateStatusRelationCategoryService } from '../../../services/product/productCategory/UpdateStatusRelationCategoryService';

class UpdateStatusRelationCategoryController {
  async handle(req: Request, res: Response) {
    const relationProductCategory_id = req.query.relationProductCategory_id as string;

    const updateCategory = new UpdateStatusRelationCategoryService();

    const category = await updateCategory.execute({
      relationProductCategory_id
    });

    return res.json(category);
    
  }
}

export { UpdateStatusRelationCategoryController }