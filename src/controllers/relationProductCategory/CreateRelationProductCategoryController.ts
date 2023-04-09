import { Request, Response } from "express";
import { CreateRelationProductCategoryService } from "../../services/relationProductCategory/CreateRelationProductCategoryService";

class CreateRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            category_id,
            nivel
        } = req.body;

        const createRelations = new CreateRelationProductCategoryService();

        const relation = await createRelations.execute({
            product_id,
            category_id,
            nivel
        });

        return res.json(relation)

    }
}

export { CreateRelationProductCategoryController }