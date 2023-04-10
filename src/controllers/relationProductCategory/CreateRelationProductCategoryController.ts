import { Request, Response } from "express";
import { CreateRelationProductCategoryService } from "../../services/relationProductCategory/CreateRelationProductCategoryService";

class CreateRelationProductCategoryController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            category_id,
            nivel,
            relationId,
            order,
            posicao,
            slugPosicao,
            loja_id
        } = req.body;

        const createRelations = new CreateRelationProductCategoryService();

        const relation = await createRelations.execute({
            product_id,
            category_id,
            nivel,
            relationId,
            order,
            posicao,
            slugPosicao,
            loja_id
        });

        return res.json(relation)

    }
}

export { CreateRelationProductCategoryController }