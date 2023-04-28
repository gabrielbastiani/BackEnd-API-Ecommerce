import { Request, Response } from "express";
import { ListPosicaoCategoriesGroupService } from "../../../services/category/groupCategory/ListPosicaoCategoriesGroupService";

class ListPosicaoCategoriesGroupController {
  async handle(req: Request, res: Response) {
    const group = new ListPosicaoCategoriesGroupService();

    const { slugPosicao, slugCategoryOrItem } = req.query;

    const categoiesGroup = await group.execute({
      slugPosicao,
      slugCategoryOrItem
    });

    return res.json(categoiesGroup);
  }
}

export { ListPosicaoCategoriesGroupController };