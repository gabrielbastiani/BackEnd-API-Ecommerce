import { Request, Response } from 'express';
import { EmailExportNewslettersService } from '../../services/sendEmails/EmailExportNewslettersService';

class EmailExportNewslettersController {
    async handle(req: Request, res: Response) {
        const listNewslatters = new EmailExportNewslettersService();
        const newslattersEmail = await listNewslatters.execute();

        return res.json(newslattersEmail);
    }
}

export { EmailExportNewslettersController }