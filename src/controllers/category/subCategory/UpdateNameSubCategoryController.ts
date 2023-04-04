import { Request, Response } from 'express';
import { UpdateNameSubCategoryService } from '../../../services/category/subCategory/UpdateNameSubCategoryService';

class UpdateNameSubCategoryController {
  async handle(req: Request, res: Response) {
    const subcategory_id = req.query.subcategory_id;

    const { subCategoryName, slug } = req.body;

    const updateCategory = new UpdateNameSubCategoryService();

    const category = await updateCategory.execute({
      subcategory_id,
      subCategoryName,
      slug
    });

    return res.json(category);
    
  }
}

export { UpdateNameSubCategoryController }