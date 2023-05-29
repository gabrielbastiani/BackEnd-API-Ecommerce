import { Request, Response } from 'express';
import { EmailExportContatoService } from '../../services/sendEmails/EmailExportContatoService';

class EmailExportContatoController {
    async handle(req: Request, res: Response) {
        const listContacts = new EmailExportContatoService();
        const contatosSend = await listContacts.execute();

        return res.json(contatosSend);
    }
}

export { EmailExportContatoController }