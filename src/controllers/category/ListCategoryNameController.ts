import { Request, Response } from "express";
import { ListCategoryNameService } from "../../services/category/ListCategoryNameService";

class ListCategoryNameController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const name = new ListCategoryNameService();

    const name = await name.execute({
      category_id,
    });

    return res.json(name);
  }
}

export { ListCategoryNameController };