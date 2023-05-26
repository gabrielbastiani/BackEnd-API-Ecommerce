import { Request, Response } from 'express';
import { UpdateDescriptionCategoryService } from '../../services/category/UpdateDescriptionCategoryService';

class UpdateDescriptionCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const { description } = req.body;

    const updateCategory = new UpdateDescriptionCategoryService();

    const category = await updateCategory.execute({
      category_id,
      description
    });

    return res.json(category);

  }
}

export { UpdateDescriptionCategoryController }