import { Request, Response } from "express";
import { ListSubCategoryService } from "../../../services/category/subCategory/ListSubCategoryService";

class ListSubCategoryController {
   async handle(req: Request, res: Response){
      const listCategoryService = new ListSubCategoryService();

      const category = await listCategoryService.execute();

      return res.json(category);
      
   }
}

export { ListSubCategoryController }