import { Request, Response } from 'express'
import { UpdateStatusGroupFilterService } from '../../services/filtros/UpdateStatusGroupFilterService';

class UpdateStatusGroupFilterController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const group = new UpdateStatusGroupFilterService();

        const groupItem = await group.execute({
            groupFilter_id
        });

        return res.json(groupItem);

    }
}

export { UpdateStatusGroupFilterController }