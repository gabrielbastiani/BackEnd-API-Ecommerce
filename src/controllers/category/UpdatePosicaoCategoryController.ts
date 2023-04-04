import { Request, Response } from 'express';
import { UpdatePosicaoCategoryService } from '../../services/category/UpdatePosicaoCategoryService';

class UpdatePosicaoCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id;

    const { posicao, slugPosicao } = req.body;

    const updateCategory = new UpdatePosicaoCategoryService();

    const category = await updateCategory.execute({
      category_id,
      posicao,
      slugPosicao
    });

    return res.json(category);
    
  }
}

export { UpdatePosicaoCategoryController }