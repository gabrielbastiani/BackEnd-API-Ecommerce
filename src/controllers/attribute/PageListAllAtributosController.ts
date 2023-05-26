import { Request, Response } from 'express';
import { PageListAllAtributosService } from '../../services/atributo/PageListAllAtributosService';

class PageListAllAtributosController {
    async handle(req: Request, res: Response) {
        const pageListAtributos = new PageListAllAtributosService();

        const { page, limit } = req.query;

        const pageAtributos = await pageListAtributos.execute(Number(page), Number(limit));

        return res.json(pageAtributos);
    }
}

export { PageListAllAtributosController }