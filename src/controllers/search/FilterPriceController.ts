import { Request, Response } from 'express';
import { FilterPriceService } from '../../services/search/FilterPriceService';

class FilterPriceController {
    async handle(req: Request, res: Response) {

        const { page, limit, priceMin, priceMax } = req.query;

        const listFilter = new FilterPriceService();

        const filter = await listFilter.execute( Number(page), Number(limit), Number(priceMin), Number(priceMax) );

        return res.json(filter);
    }
}

export { FilterPriceController }