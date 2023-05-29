import { Request, Response } from 'express';
import { UpdateNameFilterGroupService } from '../../../services/groupFilter/filterCategory/UpdateNameFilterGroupService';

class UpdateNameFilterGroupController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const { groupFilter_id } = req.body;

        const updateName = new UpdateNameFilterGroupService();

        const filter = await updateName.execute({
            filterCategory_id,
            groupFilter_id,
        });

        return res.json(filter);

    }
}

export { UpdateNameFilterGroupController }