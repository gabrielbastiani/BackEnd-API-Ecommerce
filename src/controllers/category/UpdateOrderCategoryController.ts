import { Request, Response } from 'express';
import { UpdateOrderCategoryService } from '../../services/category/UpdateOrderCategoryService';

class UpdateOrderCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const { order } = req.body;

    const updateCategory = new UpdateOrderCategoryService();

    const category = await updateCategory.execute({
      category_id,
      order
    });

    return res.json(category);
    
  }
}

export { UpdateOrderCategoryController }