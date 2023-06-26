import { Request, Response } from "express";
import { MenuCategoryService } from "../../../services/category/menuCategory/MenuCategoryService";

class MenuCategoryController {
  async handle(req: Request, res: Response) {
    const parentId = req.query.parentId as string;

    const menu = new MenuCategoryService();

    const menuCategory = await menu.execute({ parentId });

    return res.json(menuCategory);
  }
}

export { MenuCategoryController };