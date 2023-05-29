import { Request, Response } from "express";
import { DeleteContactService } from "../../services/contact/DeleteContactService";

class DeleteContactController {
    async handle(req: Request, res: Response) {
        const contact_id = req.query.contact_id as string;

        const deleteContacts = new DeleteContactService();

        const contacts = await deleteContacts.execute({
            contact_id,
        });

        return res.json(contacts);
    }
}

export { DeleteContactController };