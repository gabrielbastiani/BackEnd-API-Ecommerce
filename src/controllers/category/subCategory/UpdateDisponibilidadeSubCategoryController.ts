import { Request, Response } from 'express';
import { UpdateDisponibilidadeSubCategoryService } from '../../../services/category/subCategory/UpdateDisponibilidadeSubCategoryService';

class UpdateDisponibilidadeSubCategoryController {
  async handle(req: Request, res: Response) {
    const subcategory_id = req.query.subcategory_id as string;

    const updateCategory = new UpdateDisponibilidadeSubCategoryService();

    const category = await updateCategory.execute({
      subcategory_id
    });

    return res.json(category);
    
  }
}

export { UpdateDisponibilidadeSubCategoryController }