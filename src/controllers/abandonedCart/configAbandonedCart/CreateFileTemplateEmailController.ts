import { Request, Response } from "express";
import { CreateFileTemplateEmailService } from "../../../services/abandonedCart/configAbandonedCart/CreateFileTemplateEmailService";

class CreateFileTemplateEmailController {
  async handle(req: Request, res: Response) {
    const {
      configAbandonedCart_id,
      template_cart_email,
      name_file_email
    } = req.body;

    const templates = new CreateFileTemplateEmailService();

    const createAbandoned = await templates.execute({
      configAbandonedCart_id,
      template_cart_email,
      name_file_email
    });

    return res.json(createAbandoned);

  }
}

export { CreateFileTemplateEmailController }