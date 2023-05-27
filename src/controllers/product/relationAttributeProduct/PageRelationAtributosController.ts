import { Request, Response } from 'express';
import { PageRelationAtributosService } from '../../../services/atributo/relationProductAtributo/PageRelationAtributosService';

class PageRelationAtributosController {
    async handle(req: Request, res: Response) {
        const pageListAtributos = new PageRelationAtributosService();

        const { page, limit, atributo_id } = req.query;

        const atributosPage = await pageListAtributos.execute(Number(page), Number(limit), String(atributo_id));

        return res.json(atributosPage);
    }
}

export { PageRelationAtributosController }