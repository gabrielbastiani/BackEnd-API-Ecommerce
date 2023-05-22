import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const {
      name,
      slug,
      loja_id
    } = req.body;

    const categorys = new CreateCategoryService();

    const category = await categorys.execute({
      name,
      slug,
      loja_id
    });

    return res.json(category);

  }
}

export { CreateCategoryController }