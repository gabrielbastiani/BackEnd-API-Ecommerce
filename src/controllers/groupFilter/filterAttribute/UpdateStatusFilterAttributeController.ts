import { Request, Response } from 'express'
import { UpdateStatusFilterAttributeService } from '../../../services/groupFilter/filterAttribute/UpdateStatusFilterAttributeService';

class UpdateStatusFilterAttributeController {
    async handle(req: Request, res: Response) {
        const filterAttribute_id = req.query.filterAttribute_id as string;

        const filter = new UpdateStatusFilterAttributeService();

        const attribute = await filter.execute({
            filterAttribute_id
        });

        return res.json(attribute);

    }
}

export { UpdateStatusFilterAttributeController }