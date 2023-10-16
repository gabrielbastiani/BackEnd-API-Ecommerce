import { Request, Response } from "express";
import { CreateFileTemplateEmailOrderStatusService } from "../../../services/order/templatesEmailsOrderStatus/CreateFileTemplateEmailOrderStatusService";

class CreateFileTemplateEmailOrderStatusController {
  async handle(req: Request, res: Response) {
    const {
      status_order,
      subject,
      template_cart_email,
      active,
      name_file_email
    } = req.body;

    const templates = new CreateFileTemplateEmailOrderStatusService();

    const createTemplate = await templates.execute({
      status_order,
      subject,
      template_cart_email,
      active,
      name_file_email
    });

    return res.json(createTemplate);

  }
}

export { CreateFileTemplateEmailOrderStatusController }