import { Request, Response } from 'express';
import { FindManyFilterAttributeNameService } from '../../../services/groupFilter/filterAttribute/FindManyFilterAttributeNameService';

class FindManyFilterAttributeNameController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const findAtributo = new FindManyFilterAttributeNameService();

        const find = await findAtributo.execute({
            groupFilter_id,
        });

        return res.json(find);

    }
}

export { FindManyFilterAttributeNameController }