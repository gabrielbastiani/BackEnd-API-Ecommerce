import { Request, Response } from 'express'
import { UpdateStatusTemplateEmailService } from '../../../services/order/templatesEmailsOrderStatus/UpdateStatusTemplateEmailService'; 

class UpdateStatusTemplateEmailController {
    async handle(req: Request, res: Response) {
        const templateOrderEmail_id = req.query.templateOrderEmail_id as string;

        const template = new UpdateStatusTemplateEmailService();

        const updateTemplate = await template.execute({
            templateOrderEmail_id
        });

        return res.json(updateTemplate);

    }
}

export { UpdateStatusTemplateEmailController }