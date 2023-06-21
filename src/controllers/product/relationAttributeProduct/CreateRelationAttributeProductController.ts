import { Request, Response } from "express";
import { CreateRelationAttributeProductServices } from "../../../services/product/relationAttributeProduct/CreateRelationAttributeProductServices";

class CreateRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            type,
            valueAttribute_id,
            order,
            store_id
        } = req.body;

        const createRelations = new CreateRelationAttributeProductServices();

        const relation = await createRelations.execute({
            product_id,
            type,
            valueAttribute_id,
            order,
            store_id
        });

        return res.json(relation)

    }
}

export { CreateRelationAttributeProductController }