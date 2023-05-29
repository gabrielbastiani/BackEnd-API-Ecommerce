import { Request, Response } from 'express';
import { UpdateOrderFilterAttributeService } from '../../../services/groupFilter/filterAttribute/UpdateOrderFilterAttributeService';

class UpdateOrderFilterAttributeController {
    async handle(req: Request, res: Response) {
        const filterAttribute_id = req.query.filterAttribute_id as string;

        const { order } = req.body;

        const updateOrder = new UpdateOrderFilterAttributeService();

        const filter = await updateOrder.execute({
            filterAttribute_id,
            order,
        });

        return res.json(filter);

    }
}

export { UpdateOrderFilterAttributeController }