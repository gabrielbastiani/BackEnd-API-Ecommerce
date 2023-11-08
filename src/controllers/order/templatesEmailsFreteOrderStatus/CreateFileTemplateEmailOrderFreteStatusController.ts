import { Request, Response } from "express";
import { CreateFileTemplateEmailFreteOrderStatusService } from "../../../services/order/templatesEmailsFreteOrderStatus/CreateFileTemplateEmailFreteOrderStatusService"; 

class CreateFileTemplateEmailOrderFreteStatusController {
  async handle(req: Request, res: Response) {
    const {
      status_frete,
      subject,
      template_frete_email,
      active,
      name_file_email
    } = req.body;

    const templates = new CreateFileTemplateEmailFreteOrderStatusService();

    const createTemplate = await templates.execute({
      status_frete,
      subject,
      template_frete_email,
      active,
      name_file_email
    });

    return res.json(createTemplate);

  }
}

export { CreateFileTemplateEmailOrderFreteStatusController }