import { Request, Response } from "express";
import { FindTypeFilterService } from "../../services/groupFilter/FindTypeFilterService";

class FindTypeFilterController {
  async handle(req: Request, res: Response) {
    const type = req.query.type as string;

    const atributoNames = new FindTypeFilterService();

    const name = await atributoNames.execute({
      type,
    });

    return res.json(name);
  }
}

export { FindTypeFilterController };