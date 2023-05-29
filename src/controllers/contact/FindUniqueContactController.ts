import { Request, Response } from 'express';
import { FindUniqueContactService } from '../../services/contact/FindUniqueContactService';

class FindUniqueContactController {
    async handle(req: Request, res: Response) {
        const contact_id = req.query.contact_id as string;
        const listContacts = new FindUniqueContactService();
        const contacts = await listContacts.execute({ contact_id });

        return res.json(contacts);
    }
}

export { FindUniqueContactController }