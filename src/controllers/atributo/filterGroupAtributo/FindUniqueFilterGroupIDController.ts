import { Request, Response } from "express";
import { FindUniqueFilterGroupIDService } from "../../../services/atributo/filterGroupAtributo/FindUniqueFilterGroupIDService";

class FindUniqueFilterGroupIDController {
  async handle(req: Request, res: Response) {
    const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

    const group = new FindUniqueFilterGroupIDService();

    const atributosGroups = await group.execute({ groupFilterAtributo_id });

    return res.json(atributosGroups);
  }
}

export { FindUniqueFilterGroupIDController };