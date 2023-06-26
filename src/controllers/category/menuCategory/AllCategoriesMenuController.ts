import { Request, Response } from "express";
import { AllCategoriesMenuService } from "../../../services/category/menuCategory/AllCategoriesMenuService";

class AllCategoriesMenuController {
   async handle(req: Request, res: Response) {
      const listCategoryService = new AllCategoriesMenuService();

      const category = await listCategoryService.execute();

      return res.json(category);

   }
}

export { AllCategoriesMenuController }