import { Request, Response } from 'express';
import { DeleteAllFilterAttributeService } from '../../../services/groupFilter/filterAttribute/DeleteAllFilterAttributeService';

class DeleteAllFilterAttributeController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const deleteFiltro = new DeleteAllFilterAttributeService();

        const deleteFilter = await deleteFiltro.execute({
            groupFilter_id,
        });

        return res.json(deleteFilter);

    }
}

export { DeleteAllFilterAttributeController }