import { Request, Response } from "express";
import { ListCategoryNameService } from "../../services/category/ListCategoryNameService";

class ListCategoryNameController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const categoryName = new ListCategoryNameService();

    const name = await categoryName.execute({
      category_id,
    });

    return res.json(name);
  }
}

export { ListCategoryNameController };