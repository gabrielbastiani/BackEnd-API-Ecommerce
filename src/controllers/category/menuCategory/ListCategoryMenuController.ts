import { Request, Response } from "express";
import { ListCategoryMenuService } from "../../../services/category/menuCategory/ListCategoryMenuService";

class ListCategoryMenuController {
  async handle(req: Request, res: Response) {
    const parentId = req.query.parentId as string;

    const menu = new ListCategoryMenuService();

    const menuCategory = await menu.execute({ parentId });

    return res.json(menuCategory);
  }
}

export { ListCategoryMenuController };