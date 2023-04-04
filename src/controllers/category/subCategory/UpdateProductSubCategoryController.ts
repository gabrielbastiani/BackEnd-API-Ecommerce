import { Request, Response } from 'express';
import { UpdateProductSubCategoryService } from '../../../services/category/subCategory/UpdateProductSubCategoryService';

class UpdateProductSubCategoryController {
  async handle(req: Request, res: Response) {
    const subcategory_id = req.query.subcategory_id;

    const { product_id } = req.body;

    const updateCategory = new UpdateProductSubCategoryService();

    const category = await updateCategory.execute({
      subcategory_id,
      product_id,
    });

    return res.json(category);
    
  }
}

export { UpdateProductSubCategoryController }