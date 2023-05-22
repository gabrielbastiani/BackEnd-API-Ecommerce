import { Request, Response } from "express";
import { FindSlugGroupFilterService } from "../../services/filtros/FindSlugGroupFilterService";

class FindSlugGroupFilterController {
  async handle(req: Request, res: Response) {
    const slugCategory = req.query.slugCategory as string;

    const group = new FindSlugGroupFilterService();

    const filter = await group.execute({
      slugCategory,
    });

    return res.json(filter);
  }
}

export { FindSlugGroupFilterController };