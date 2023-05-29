import { Request, Response } from 'express'
import { CreateContactService } from '../../services/contact/CreateContactService'

class CreateContactController {
  async handle(req: Request, res: Response){
    const { name, email, phone, company, sector, message, store_id } = req.body;

    const createContact = new CreateContactService();

    const contacts = await createContact.execute({
      name,
      email,
      phone,
      company,
      sector,
      message,
      store_id
    });

    return res.json(contacts);

  }
}

export { CreateContactController }