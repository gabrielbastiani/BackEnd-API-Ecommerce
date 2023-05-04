import { Request, Response } from "express";
import { ListPosicaoAtributosFiltrosGroupService } from "../../../services/atributo/filterGroupAtributo/ListPosicaoAtributosFiltrosGroupService";

class ListPosicaoAtributoFiltroGroupController {
  async handle(req: Request, res: Response) {
    const group = new ListPosicaoAtributosFiltrosGroupService();

    const { slugCategoryOrItem } = req.query;

    const atributosGroup = await group.execute({
      slugCategoryOrItem
    });

    return res.json(atributosGroup);
  }
}

export { ListPosicaoAtributoFiltroGroupController };