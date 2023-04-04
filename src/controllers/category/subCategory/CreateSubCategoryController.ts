import { Request, Response } from 'express';
import { CreateSubCategoryService } from '../../../services/category/subCategory/CreateSubCategoryService';

class CreateSubCategoryController {
  async handle(req: Request, res: Response) {
    const { subCategoryName, slug, order, posicao, slugPosicao, loja_id, category_id, product_id } = req.body;

    const createCategoryService = new CreateSubCategoryService();

    const subCategory = await createCategoryService.execute({
      subCategoryName,
      slug,
      order,
      posicao,
      product_id,
      category_id,
      slugPosicao,
      loja_id
    });

    return res.json(subCategory);

  }
}

export { CreateSubCategoryController }