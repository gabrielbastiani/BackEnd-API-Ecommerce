import { Request, Response } from 'express';
import { UpdatePosicaoSubCategoryService } from '../../../services/category/subCategory/UpdatePosicaoSubCategoryService';

class UpdatePosicaoSubCategoryController {
  async handle(req: Request, res: Response) {
    const subcategory_id = req.query.subcategory_id;

    const { posicao, slugPosicao } = req.body;

    const updateCategory = new UpdatePosicaoSubCategoryService();

    const category = await updateCategory.execute({
      subcategory_id,
      posicao,
      slugPosicao
    });

    return res.json(category);
    
  }
}

export { UpdatePosicaoSubCategoryController }