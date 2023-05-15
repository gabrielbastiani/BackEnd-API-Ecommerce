import { Request, Response } from "express";
import { CreateRelationAtributosServices } from "../../../services/atributo/relationProductAtributo/CreateRelationAtributosServices";

class CreateRelationAtributosController {
    async handle(req: Request, res: Response) {
        const {
            tipo,
            product_id,
            variacao_id,
            order,
            loja_id
        } = req.body;

        const createRelations = new CreateRelationAtributosServices();

        const relation = await createRelations.execute({
            tipo,
            product_id,
            variacao_id,
            order,
            loja_id
        });

        return res.json(relation)

    }
}

export { CreateRelationAtributosController }