import { Request, Response } from 'express';
import { ListExactContatoService } from '../../services/contatos/ListExactContatoService';

class ListExactContatoController {
    async handle(req: Request, res: Response) {
        const { contato_id } = req.query;
        const listContatos = new ListExactContatoService();
        const contatos = await listContatos.execute({ contato_id });

        return res.json(contatos);
    }
}

export { ListExactContatoController }