import { Request, Response } from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { categoryName, slug, order, posicao, slugPosicao, loja_id, product_id } = req.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({
      categoryName,
      slug,
      order,
      posicao,
      product_id,
      slugPosicao,
      loja_id
    });

    return res.json(category);

  }
}

export { CreateCategoryController }