import { Request, Response } from "express";
import { DeleteSubCategoryService } from "../../../services/category/subCategory/DeleteSubCategoryService";

class DeleteSubCategoryController {
  async handle(req: Request, res: Response) {
    const subcategory_id = req.query.subcategory_id as string;

    const deleteCategoryService = new DeleteSubCategoryService();

    const categoryDelete = await deleteCategoryService.execute({
      subcategory_id,
    });

    return res.json(categoryDelete);
  }
}

export { DeleteSubCategoryController };