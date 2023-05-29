import { Request, Response } from 'express';
import { PageGroupsFiltersService } from '../../services/groupFilter/PageGroupsFiltersService';

class PageGroupsFiltersController {
    async handle(req: Request, res: Response) {
        const pagesGroups = new PageGroupsFiltersService();

        const { page, limit } = req.query;

        const groups = await pagesGroups.execute(Number(page), Number(limit));

        return res.json(groups);
    }
}

export { PageGroupsFiltersController }