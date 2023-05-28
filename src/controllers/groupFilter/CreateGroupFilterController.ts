import { Request, Response } from "express";
import { CreateGroupFilterService } from "../../services/groupFilter/CreateGroupFilterService";

class CreateGroupFilterController {
    async handle(req: Request, res: Response) {
        const {
            nameGroup,
            type,
            slugCategory,
            order,
            store_id
        } = req.body;

        const createGroup = new CreateGroupFilterService();

        const group = await createGroup.execute({
            nameGroup,
            type,
            slugCategory,
            order,
            store_id
        });

        return res.json(group)

    }
}

export { CreateGroupFilterController }