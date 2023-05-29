import { Request, Response } from 'express';
import { UpdateNameGroupFilterService } from '../../services/groupFilter/UpdateNameGroupFilterService';

class UpdateNameGroupFilterController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const { nameGroup } = req.body;

        const updateName = new UpdateNameGroupFilterService();

        const group = await updateName.execute({
            groupFilter_id,
            nameGroup,
        });

        return res.json(group);

    }
}

export { UpdateNameGroupFilterController }