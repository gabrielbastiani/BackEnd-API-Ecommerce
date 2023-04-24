import { Request, Response } from 'express'
import { StatusItemCategoryGroupService } from '../../../services/category/groupCategory/StatusItemCategoryGroupService'

class StatusItemCategoryGroupController {
    async handle(req: Request, res: Response) {
        const groupCategoy_id = req.query.groupCategoy_id as string;

        const group = new StatusItemCategoryGroupService();

        const groupItem = await group.execute({
            groupCategoy_id
        });

        return res.json(groupItem);

    }
}

export { StatusItemCategoryGroupController }