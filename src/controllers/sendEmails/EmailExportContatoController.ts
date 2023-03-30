import { Request, Response } from 'express';
import { EmailExportContatoService } from '../../services/sendEmails/EmailExportContatoService';

class EmailExportContatoController {
    async handle(req: Request, res: Response) {
        const listContatos = new EmailExportContatoService();
        const contatosSend = await listContatos.execute();

        return res.json(contatosSend);
    }
}

export { EmailExportContatoController }