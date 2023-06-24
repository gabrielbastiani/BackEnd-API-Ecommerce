import { Request, Response } from 'express';
import { FilterPriceService } from '../../services/search/FilterPriceService';

class FilterPriceController {
    async handle(req: Request, res: Response) {

        const { /* product_id, */ priceMin, priceMax } = req.query;

        const listFilter = new FilterPriceService();

        const filter = await listFilter.execute({ /* product_id, */ priceMin, priceMax });

        return res.json(filter);
    }
}

export { FilterPriceController }