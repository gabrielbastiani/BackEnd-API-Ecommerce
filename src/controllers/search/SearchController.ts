import { Request, Response } from 'express';
import { SearchService } from '../../services/search/SearchService';

class SearchController {
    async handle(req: Request, res: Response) {

        const { q } = req.query;

        const listSearch = new SearchService();

        const search = await listSearch.execute({ q });

        return res.json(search);
    }
}

export { SearchController }