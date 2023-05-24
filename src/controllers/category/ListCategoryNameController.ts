import { Request, Response } from "express";
import { ListCategoryNameService } from "../../services/category/ListCategoryNameService";

class ListCategoryNameController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const names = new ListCategoryNameService();

    const name = await names.execute({
      category_id,
    });

    return res.json(name);
  }
}

export { ListCategoryNameController };