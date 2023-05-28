import { Request, Response } from 'express';
import { PageAtributoFiltroService } from '../../../services/filtros/atributoFilter/PageAtributoFiltroService';

class PageAtributoFiltroController {
    async handle(req: Request, res: Response) {
        const pagesAtributos = new PageAtributoFiltroService();

        const { page, limit } = req.query;

        const atributos = await pagesAtributos.execute(Number(page), Number(limit));

        return res.json(atributos);
    }
}

export { PageAtributoFiltroController }