import { Request, Response } from 'express';
import { UpdateStatusCategoryService } from '../../services/category/UpdateStatusCategoryService';

class UpdateStatusCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const updateCategory = new UpdateStatusCategoryService();

    const category = await updateCategory.execute({
      category_id
    });

    return res.json(category);
    
  }
}

export { UpdateStatusCategoryController }