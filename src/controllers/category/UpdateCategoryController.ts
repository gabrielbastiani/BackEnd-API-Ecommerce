import { Request, Response } from 'express';
import { UpdateCategoryService } from '../../services/category/UpdateCategoryService';

class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id;

    const { categoryName } = req.body;

    const updateUserService = new UpdateCategoryService();

    const nameCategory = await updateUserService.execute({
      category_id,
      categoryName,
    });
    return res.json(nameCategory);
  }
}

export { UpdateCategoryController }