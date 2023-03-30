import { Request, Response } from 'express';
import { ExportContatoService } from '../../services/contatos/ExportContatoService';

class ExportContatoController {
    async handle(req: Request, res: Response) {
        const listAllContactForm = new ExportContatoService();
        const contatos = await listAllContactForm.execute();

        return res.json(contatos);
    }
}

export { ExportContatoController }