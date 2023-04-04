import { Request, Response } from 'express';
import { UpdateCategorySubCategoryService } from '../../../services/category/subCategory/UpdateCategorySubCategoryService';

class UpdateCategorySubCategoryController {
  async handle(req: Request, res: Response) {
    const subcategory_id = req.query.subcategory_id;

    const { category_id } = req.body;

    const updateCategory = new UpdateCategorySubCategoryService();

    const category = await updateCategory.execute({
      subcategory_id,
      category_id,
    });

    return res.json(category);

  }
}

export { UpdateCategorySubCategoryController }