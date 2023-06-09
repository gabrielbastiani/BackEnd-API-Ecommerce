import { Request, Response } from "express";
import { ListAllCategoriesStorePageService } from "../../services/category/ListAllCategoriesStorePageService";

class ListAllCategoriesStorePageController {
  async handle(req: Request, res: Response) {
    const slug = req.query.slug as string;

    const names = new ListAllCategoriesStorePageService();

    const name = await names.execute({
      slug,
    });

    return res.json(name);
  }
}

export { ListAllCategoriesStorePageController };