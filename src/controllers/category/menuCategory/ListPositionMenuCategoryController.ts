import { Request, Response } from "express";
import { ListPositionMenuCategoryService } from "../../../services/category/menuCategory/ListPositionMenuCategoryService";

class ListPositionMenuCategoryController {
  async handle(req: Request, res: Response) {
    const menu = new ListPositionMenuCategoryService();

    const slugPosition = req.query.slugPosition as string;
    const slugCategory = req.query.slugCategory as string;

    const categoryMenu = await menu.execute({
      slugPosition,
      slugCategory
    });

    return res.json(categoryMenu);
  }
}

export { ListPositionMenuCategoryController };