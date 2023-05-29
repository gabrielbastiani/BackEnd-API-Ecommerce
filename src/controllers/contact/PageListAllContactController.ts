import { Request, Response } from 'express';
import { PageListAllContactService } from '../../services/contact/PageListAllContactService';

class PageListAllContactController {
    async handle(req: Request, res: Response) {
        const listContacts = new PageListAllContactService();

        const { page, limit } = req.query;

        const pageContact = await listContacts.execute(Number(page), Number(limit));

        return res.json(pageContact);
    }
}

export { PageListAllContactController }