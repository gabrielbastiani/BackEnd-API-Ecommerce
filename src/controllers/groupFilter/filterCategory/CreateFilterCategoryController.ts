import { Request, Response } from "express";
import { CreateFilterCategoryService } from "../../../services/groupFilter/filterCategory/CreateFilterCategoryService";

class CreateFilterCategoryController {
    async handle(req: Request, res: Response) {
        const {
            groupFilter_id,
            name,
            order,
            store_id
        } = req.body;

        const filterCategory = new CreateFilterCategoryService();

        const filter = await filterCategory.execute({
            groupFilter_id,
            name,
            order,
            store_id
        });

        return res.json(filter)

    }
}

export { CreateFilterCategoryController }