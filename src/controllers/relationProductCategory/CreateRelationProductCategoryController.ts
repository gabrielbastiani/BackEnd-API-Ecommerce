import { Request, Response } from "express";
import { CreateRelationProductCategoryService } from "../../services/relationProductCategory/CreateRelationProductCategoryService";

class CreateRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            category_id,
            nivel,
            relationId
        } = req.body;

        const createRelations = new CreateRelationProductCategoryService();

        const relation = await createRelations.execute({
            product_id,
            category_id,
            nivel,
            relationId
        });

        return res.json(relation)

    }
}

export { CreateRelationProductCategoryController }