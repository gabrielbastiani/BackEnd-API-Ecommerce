import { Request, Response } from "express";
import { CreateRelationAtributosServices } from "../../../services/atributo/relationProductAtributo/CreateRelationAtributosServices";

class CreateRelationAtributosController {
    async handle(req: Request, res: Response) {
        const {
            atributo_id,
            product_id,
            variacao_id,
            order,
            store_id
        } = req.body;

        const createRelations = new CreateRelationAtributosServices();

        const relation = await createRelations.execute({
            atributo_id,
            product_id,
            variacao_id,
            order,
            store_id
        });

        return res.json(relation)

    }
}

export { CreateRelationAtributosController }