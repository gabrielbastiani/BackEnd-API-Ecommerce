import { Request, Response } from 'express';
import { UpdateTypeAttributeGroupService } from '../../services/groupFilter/UpdateTypeAttributeGroupService';

class UpdateTypeAttributeGroupController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const { type } = req.body;

        const updateName = new UpdateTypeAttributeGroupService();

        const group = await updateName.execute({
            groupFilter_id,
            type,
        });

        return res.json(group);

    }
}

export { UpdateTypeAttributeGroupController }