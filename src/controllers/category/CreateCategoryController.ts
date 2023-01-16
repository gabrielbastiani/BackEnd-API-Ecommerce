import {Request, Response} from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

class CreateCategoryController {
  async handle(req: Request, res: Response){
    const { categoryName, codigo, loja_id } = req.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({
      categoryName,
      codigo,
      loja_id
    });

    return res.json(category);

  }
}

export { CreateCategoryController }