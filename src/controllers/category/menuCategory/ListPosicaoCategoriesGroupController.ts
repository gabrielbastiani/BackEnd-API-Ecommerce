import { Request, Response } from "express";
import { ListPosicaoCategoriesGroupService } from "../../../services/category/groupCategory/ListPosicaoCategoriesGroupService";

class ListPosicaoCategoriesGroupController {
  async handle(req: Request, res: Response) {
    const group = new ListPosicaoCategoriesGroupService();

    const { slugPosicao, slugCategory } = req.query;

    const categoiesGroup = await group.execute({
      slugPosicao,
      slugCategory
    });

    return res.json(categoiesGroup);
  }
}

export { ListPosicaoCategoriesGroupController };