import { Request, Response } from "express";
import { ListAtributoGroupIDService } from "../../../services/atributo/filterGroupAtributo/ListAtributoGroupIDService";

class ListAtributoGroupIDController {
  async handle(req: Request, res: Response) {
    const groupId = req.query.groupId as string;

    const group = new ListAtributoGroupIDService();

    const atributosGrupo = await group.execute({ groupId });

    return res.json(atributosGrupo);
  }
}

export { ListAtributoGroupIDController };