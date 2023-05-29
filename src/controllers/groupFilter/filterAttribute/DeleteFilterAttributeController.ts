import { Request, Response } from 'express';
import { DeleteFilterAttributeService } from '../../../services/groupFilter/filterAttribute/DeleteFilterAttributeService';

class DeleteFilterAttributeController {
    async handle(req: Request, res: Response) {
        const filterAttribute_id = req.query.filterAttribute_id as string;

        const deleteFiltro = new DeleteFilterAttributeService();

        const deleteFilter = await deleteFiltro.execute({
            filterAttribute_id,
        });

        return res.json(deleteFilter);

    }
}

export { DeleteFilterAttributeController }