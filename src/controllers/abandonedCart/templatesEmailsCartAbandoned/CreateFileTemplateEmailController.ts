import { Request, Response } from "express";
import { CreateFileTemplateEmailService } from "../../../services/abandonedCart/templatesEmailsCartAbandoned/CreateFileTemplateEmailService";

class CreateFileTemplateEmailController {
  async handle(req: Request, res: Response) {
    const {
      template_cart_email,
      name_file_email
    } = req.body;

    const templates = new CreateFileTemplateEmailService();

    const createAbandoned = await templates.execute({
      template_cart_email,
      name_file_email
    });

    return res.json(createAbandoned);

  }
}

export { CreateFileTemplateEmailController }