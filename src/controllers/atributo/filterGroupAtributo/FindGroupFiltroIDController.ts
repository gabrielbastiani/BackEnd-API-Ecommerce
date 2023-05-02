import { Request, Response } from "express";
import { FindGroupFiltroIDService } from "../../../services/atributo/filterGroupAtributo/FindGroupFiltroIDService";

class FindGroupFiltroIDController {
  async handle(req: Request, res: Response) {
    const groupId = req.query.groupId as string;

    const group = new FindGroupFiltroIDService();

    const atributosGroup = await group.execute({ groupId });

    return res.json(atributosGroup);
  }
}

export { FindGroupFiltroIDController };