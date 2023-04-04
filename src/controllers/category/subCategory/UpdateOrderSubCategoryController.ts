import { Request, Response } from 'express';
import { UpdateOrderSubCategoryService } from '../../../services/category/subCategory/UpdateOrderSubCategoryService';

class UpdateOrderSubCategoryController {
  async handle(req: Request, res: Response) {
    const subcategory_id = req.query.subcategory_id;

    const { order } = req.body;

    const updateCategory = new UpdateOrderSubCategoryService();

    const category = await updateCategory.execute({
      subcategory_id,
      order,
    });

    return res.json(category);
    
  }
}

export { UpdateOrderSubCategoryController }