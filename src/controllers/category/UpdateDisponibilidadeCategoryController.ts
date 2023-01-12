import { Request, Response } from 'express';
import { UpdateDisponibilidadeCategoryService } from '../../services/category/UpdateDisponibilidadeCategoryService';

class UpdateDisponibilidadeCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const updateCategory = new UpdateDisponibilidadeCategoryService();

    const category = await updateCategory.execute({
      category_id
    });

    return res.json(category);
    
  }
}

export { UpdateDisponibilidadeCategoryController }