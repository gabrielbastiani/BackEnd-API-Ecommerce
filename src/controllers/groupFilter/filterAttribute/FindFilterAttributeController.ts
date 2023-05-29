import { Request, Response } from 'express';
import { FindFilterAttributeService } from '../../../services/groupFilter/filterAttribute/FindFilterAttributeService';

class FindFilterAttributeController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const findAtributo = new FindFilterAttributeService();

        const find = await findAtributo.execute({
            groupFilter_id,
        });

        return res.json(find);

    }
}

export { FindFilterAttributeController }