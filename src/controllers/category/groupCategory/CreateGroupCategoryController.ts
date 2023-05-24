import { Request, Response } from "express";
import { CreateGroupCategoryService } from "../../../services/category/groupCategory/CreateGroupCategoryService";

class CreateGroupCategoryController {
    async handle(req: Request, res: Response) {
        const {
            nameGroup,
            itemName,
            slugCategory,
            category_id,
            nivel,
            groupId,
            order,
            posicao,
            slugPosicao,
            store_id
        } = req.body;

        const createGroup = new CreateGroupCategoryService();

        const relationGroup = await createGroup.execute({
            nameGroup,
            itemName,
            slugCategory,
            category_id,
            nivel,
            groupId,
            order,
            posicao,
            slugPosicao,
            store_id
        });

        return res.json(relationGroup)

    }
}

export { CreateGroupCategoryController }