import { Request, Response } from 'express';
import { PageListAllContatoService } from '../../services/contatos/PageListAllContatoService';

class PageListAllContatoController {
    async handle(req: Request, res: Response) {
        const listContatos = new PageListAllContatoService();

        const { page, limit } = req.query;

        const constatosPage = await listContatos.execute(Number(page), Number(limit));

        return res.json(constatosPage);
    }
}

export { PageListAllContatoController }