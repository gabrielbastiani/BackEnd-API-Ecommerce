import { Request, Response } from 'express';
import { UpdateNameCategoryService } from '../../services/category/UpdateNameCategoryService';

class UpdateNameCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const { name, slug } = req.body;

    const updateCategory = new UpdateNameCategoryService();

    const category = await updateCategory.execute({
      category_id,
      name,
      slug
    });

    return res.json(category);
    
  }
}

export { UpdateNameCategoryController }