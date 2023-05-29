import { Request, Response } from 'express';
import { EmailExportContactService } from '../../services/sendEmails/EmailExportContactService';

class EmailExportContactController {
    async handle(req: Request, res: Response) {
        const listContacts = new EmailExportContactService();
        const contatosSend = await listContacts.execute();

        return res.json(contatosSend);
    }
}

export { EmailExportContactController }