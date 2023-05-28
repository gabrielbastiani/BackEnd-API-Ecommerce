import { Request, Response } from "express";
import { FindUniqueMenuIDService } from "../../../services/category/menuCategory/FindUniqueMenuIDService";

class FindUniqueMenuIDController {
  async handle(req: Request, res: Response) {
    const menuCategory_id = req.query.menuCategory_id as string;

    const menu = new FindUniqueMenuIDService();

    const menuCategory = await menu.execute({ menuCategory_id });

    return res.json(menuCategory);
  }
}

export { FindUniqueMenuIDController };