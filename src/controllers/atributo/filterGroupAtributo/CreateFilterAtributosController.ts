import { Request, Response } from "express";
import { CreateFilterAtributosServices } from "../../../services/atributo/filterGroupAtributo/CreateFilterAtributosServices";

class CreateFilterAtributosController {
    async handle(req: Request, res: Response) {
        const {
            groupNumber,
            nameGroup,
            itemName,
            atributo_id,
            slugCategoryOrItem,
            order,
            nivel,
            groupId,
            loja_id
        } = req.body;

        const createRelations = new CreateFilterAtributosServices();

        const relation = await createRelations.execute({
            groupNumber,
            nameGroup,
            itemName,
            atributo_id,
            slugCategoryOrItem,
            order,
            nivel,
            groupId,
            loja_id
        });

        return res.json(relation)

    }
}

export { CreateFilterAtributosController }