import { Request, Response } from "express";
import { CreateRelationProductCategoryService } from "../../../services/product/relationProductCategory/CreateRelationProductCategoryService";

class CreateRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            photoProduct_id,
            photoProduct_id1,
            category_id,
            nivel,
            relationId,
            order,
            loja_id
        } = req.body;

        const createRelations = new CreateRelationProductCategoryService();

        const relation = await createRelations.execute({
            product_id,
            photoProduct_id,
            photoProduct_id1,
            category_id,
            nivel,
            relationId,
            order,
            loja_id
        });

        return res.json(relation)

    }
}

export { CreateRelationProductCategoryController }