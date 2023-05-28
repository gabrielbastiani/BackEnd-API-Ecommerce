import { Request, Response } from 'express';
import { DeleteGroupFilterService } from '../../services/groupFilter/DeleteGroupFilterService';

class DeleteGroupFilterController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const deleteGroup = new DeleteGroupFilterService();

        const deleteFilter = await deleteGroup.execute({
            groupFilter_id,
        });

        return res.json(deleteFilter);

    }
}

export { DeleteGroupFilterController }