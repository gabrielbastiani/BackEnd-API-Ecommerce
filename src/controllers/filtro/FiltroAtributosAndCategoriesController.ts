import { Request, Response } from "express";
import { FiltroAtributosAndCategoriesServices } from "../../services/filtro/FiltroAtributosAndCategoriesServices";

class FiltroAtributosAndCategoriesController {
  async handle(req: Request, res: Response) {
    
    const slug = req.query.slug as string;
    const slugValor = req.query.slugValor as string;

    const filters = new FiltroAtributosAndCategoriesServices();

    const filter = await filters.execute({ slug, slugValor });

    return res.json(filter);
  }
}

export { FiltroAtributosAndCategoriesController };