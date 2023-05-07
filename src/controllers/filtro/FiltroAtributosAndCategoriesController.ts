import { Request, Response } from "express";
import { FiltroAtributosAndCategoriesServices } from "../../services/filtro/FiltroAtributosAndCategoriesServices";

class FiltroAtributosAndCategoriesController {
  async handle(req: Request, res: Response) {
    const slug = req.query.slug as any;
    const slugValor = req.query.slugValor as any;

    const filters = new FiltroAtributosAndCategoriesServices();

    const filter = await filters.execute( slug );
    const filter1 = await filters.execute( slugValor );

    return res.json([filter, filter1]);
  }
}

export { FiltroAtributosAndCategoriesController };