import { Request, Response } from "express";
import { FiltroAtributosAndCategoriesServices } from "../../services/filtro/FiltroAtributosAndCategoriesServices";

class FiltroAtributosAndCategoriesController {
  async handle(req: Request, res: Response) {

    const filters = new FiltroAtributosAndCategoriesServices();

    const filter = await filters.execute();

    return res.json(filter);
  }
}

export { FiltroAtributosAndCategoriesController };