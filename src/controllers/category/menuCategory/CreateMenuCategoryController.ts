import { Request, Response } from "express";
import { CreateMenuCategoryService } from "../../../services/category/groupCategory/CreateMenuCategoryService";

class CreateMenuCategoryController {
    async handle(req: Request, res: Response) {
        const {
            nameGroup,
            categoryName,
            slugCategory,
            name,
            nivel,
            parentId,
            order,
            position,
            slugPosition,
            store_id
        } = req.body;

        const createGroup = new CreateMenuCategoryService();

        const menu = await createGroup.execute({
            nameGroup,
            categoryName,
            slugCategory,
            name,
            nivel,
            parentId,
            order,
            position,
            slugPosition,
            store_id
        });

        return res.json(menu)

    }
}

export { CreateMenuCategoryController }