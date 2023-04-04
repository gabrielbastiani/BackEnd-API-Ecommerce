import { Request, Response } from 'express';
import { UpdateProductCategoryService } from '../../services/category/UpdateProductCategoryService';

class UpdateProductCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id;

    const { product_id } = req.body;

    const updateCategory = new UpdateProductCategoryService();

    const category = await updateCategory.execute({
      category_id,
      product_id,
    });

    return res.json(category);
    
  }
}

export { UpdateProductCategoryController }