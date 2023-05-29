import { Request, Response } from 'express';
import { UpdateNameFilterAttributeService } from '../../../services/groupFilter/filterAttribute/UpdateNameFilterAttributeService';

class UpdateNameFilterAttributeController {
    async handle(req: Request, res: Response) {
        const filterAttribute_id = req.query.filterAttribute_id as string;

        const { groupFilter_id } = req.body;

        const updateName = new UpdateNameFilterAttributeService();

        const filter = await updateName.execute({
            filterAttribute_id,
            groupFilter_id,
        });

        return res.json(filter);

    }
}

export { UpdateNameFilterAttributeController }