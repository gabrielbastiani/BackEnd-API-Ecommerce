import { Request, Response } from 'express';
import { PageListAllGroupsAtributosService } from '../../../services/atributo/filterGroupAtributo/PageListAllGroupsAtributosService';

class PageListAllGroupsAtributosController {
    async handle(req: Request, res: Response) {
        const pageList = new PageListAllGroupsAtributosService();

        const { page, limit } = req.query;

        const groupsPage = await pageList.execute(Number(page), Number(limit));

        return res.json(groupsPage);
    }
}

export { PageListAllGroupsAtributosController }