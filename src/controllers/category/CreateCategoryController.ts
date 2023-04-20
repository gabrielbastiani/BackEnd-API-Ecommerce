import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const {
      categoryName,
      slug,
      order,
      posicao,
      slugPosicao,
      loja_id
    } = req.body;

    const categorys = new CreateCategoryService();

    const category = await categorys.execute({
      categoryName,
      slug,
      order,
      posicao,
      slugPosicao,
      loja_id
    });

    return res.json(category);

  }
}

export { CreateCategoryController }