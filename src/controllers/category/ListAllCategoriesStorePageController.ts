import { Request, Response } from "express";
import { ListAllCategoriesStorePageService } from "../../services/category/ListAllCategoriesStorePageService";

class ListAllCategoriesStorePageController {
  async handle(req: Request, res: Response) {
    const parentId = req.query.parentId as string;

    const names = new ListAllCategoriesStorePageService();

    const name = await names.execute({
      parentId,
    });

    return res.json(name);
  }
}

export { ListAllCategoriesStorePageController };