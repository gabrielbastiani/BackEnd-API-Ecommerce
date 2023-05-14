import { Request, Response } from "express";
import { FindSlugGroupFilterService } from "../../services/filtros/FindSlugGroupFilterService";

class FindSlugGroupFilterController {
  async handle(req: Request, res: Response) {
    const slugCategoryOrItem = req.query.slugCategoryOrItem as string;

    const group = new FindSlugGroupFilterService();

    const filter = await group.execute({
      slugCategoryOrItem,
    });

    return res.json(filter);
  }
}

export { FindSlugGroupFilterController };