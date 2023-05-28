import { Request, Response } from "express";
import { FindMenuIDService } from "../../../services/category/menuCategory/FindMenuIDService";

class FindMenuIDController {
  async handle(req: Request, res: Response) {
    const parentId = req.query.parentId as string;

    const menu = new FindMenuIDService();

    const categoryMenu = await menu.execute({ parentId });

    return res.json(categoryMenu);
  }
}

export { FindMenuIDController };