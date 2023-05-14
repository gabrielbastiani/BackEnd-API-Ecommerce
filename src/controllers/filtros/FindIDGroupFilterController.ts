import { Request, Response } from 'express';
import { FindIDGroupFilterService } from '../../services/filtros/FindIDGroupFilterService';

class FindIDGroupFilterController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const idFinds = new FindIDGroupFilterService();

        const group = await idFinds.execute({
            groupFilter_id
        });

        return res.json(group);

    }
}

export { FindIDGroupFilterController }