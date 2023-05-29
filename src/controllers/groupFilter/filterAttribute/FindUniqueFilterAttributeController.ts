import { Request, Response } from 'express';
import { FindUniqueFilterAttributeService } from '../../../services/groupFilter/filterAttribute/FindUniqueFilterAttributeService';

class FindUniqueFilterAttributeController {
    async handle(req: Request, res: Response) {
        const filterAttribute_id = req.query.filterAttribute_id as string;

        const findAtributo = new FindUniqueFilterAttributeService();

        const find = await findAtributo.execute({
            filterAttribute_id,
        });

        return res.json(find);

    }
}

export { FindUniqueFilterAttributeController }