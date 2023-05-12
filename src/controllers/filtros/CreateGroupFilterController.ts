import { Request, Response } from "express";
import { CreateGroupFilterService } from "../../services/filtros/CreateGroupFilterService";

class CreateGroupFilterController {
    async handle(req: Request, res: Response) {
        const {
            nameGroup,
            atributoName,
            slugCategoryOrItem,
            loja_id
        } = req.body;

        const createGroup = new CreateGroupFilterService();

        const group = await createGroup.execute({
            nameGroup,
            atributoName,
            slugCategoryOrItem,
            loja_id
        });

        return res.json(group)

    }
}

export { CreateGroupFilterController }