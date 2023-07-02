import { Request, Response } from 'express';
import { FilterService } from '../../services/search/FilterService';

class FilterController {
    async handle(req: Request, res: Response) {

        const { page, limit, q } = req.query;

        const listFilter = new FilterService();

        const filter = await listFilter.execute( Number(page), Number(limit), q );

        return res.json(filter);
    }
}

export { FilterController }