import { Request, Response } from "express";
import { ListPosicaoCategoriesGroupService } from "../../../services/category/groupCategory/ListPosicaoCategoriesGroupService";

class ListPosicaoCategoriesGroupController {
  async handle(req: Request, res: Response) {
    const slugPosicao = req.query.slugPosicao as string;

    const group = new ListPosicaoCategoriesGroupService();

    const categoiesGroup = await group.execute({
      slugPosicao
    });

    return res.json(categoiesGroup);
  }
}

export { ListPosicaoCategoriesGroupController };