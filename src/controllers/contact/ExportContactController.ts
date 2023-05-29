import { Request, Response } from 'express';
import { ExportContactService } from '../../services/contact/ExportContactService';

class ExportContactController {
    async handle(req: Request, res: Response) {
        const listAllContactForm = new ExportContactService();
        const contacts = await listAllContactForm.execute();

        return res.json(contacts);
    }
}

export { ExportContactController }