import { Request, Response } from "express";
import { FindsAtributoNameFilterService } from "../../services/filtros/FindsAtributoNameFilterService";

class FindsAtributoNameFilterController {
  async handle(req: Request, res: Response) {
    const atributoName = req.query.atributoName as string;

    const atributoNames = new FindsAtributoNameFilterService();

    const name = await atributoNames.execute({
      atributoName,
    });

    return res.json(name);
  }
}

export { FindsAtributoNameFilterController };