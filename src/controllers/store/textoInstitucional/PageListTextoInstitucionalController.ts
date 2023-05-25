import { Request, Response } from 'express';
import { PageListTextoInstitucionalService } from '../../../services/store/textoInstitucional/PageListTextoInstitucionalService';

class PageListTextoInstitucionalController {
    async handle(req: Request, res: Response) {
        const pageTextos = new PageListTextoInstitucionalService();

        const { page, limit } = req.query;

        const lojaPage = await pageTextos.execute(Number(page), Number(limit));

        return res.json(lojaPage);
    }
}

export { PageListTextoInstitucionalController }