import { Request, Response } from "express";
import { ListCategoriesGroupService } from "../../../services/category/groupCategory/ListCategoriesGroupService";

class ListCategoriesGroupController {
  async handle(req: Request, res: Response) {
    const groupId = req.query.groupId as string;

    const group = new ListCategoriesGroupService();

    const categoiesGroup = await group.execute({ groupId });

    return res.json(categoiesGroup);
  }
}

export { ListCategoriesGroupController };