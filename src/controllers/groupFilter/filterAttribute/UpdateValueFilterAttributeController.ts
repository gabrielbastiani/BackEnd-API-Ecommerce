import { Request, Response } from 'express';
import { UpdateValueFilterAttributeService } from '../../../services/groupFilter/filterAttribute/UpdateValueFilterAttributeService';

class UpdateValueFilterAttributeController {
    async handle(req: Request, res: Response) {
        const filterAttribute_id = req.query.filterAttribute_id as string;

        const { value } = req.body;

        const updateValue = new UpdateValueFilterAttributeService();

        const filter = await updateValue.execute({
            filterAttribute_id,
            value,
        });

        return res.json(filter);

    }
}

export { UpdateValueFilterAttributeController }