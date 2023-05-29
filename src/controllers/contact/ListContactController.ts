import { Request, Response } from "express";
import { ListContactService } from "../../services/contact/ListContactService";

class ListContactController {
    async handle(req: Request, res: Response) {
        const contacts = new ListContactService();

        const listContacts = await contacts.execute();

        return res.json(listContacts);

    }
}

export { ListContactController }