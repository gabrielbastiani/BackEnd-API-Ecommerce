import { Request, Response } from 'express'
import { UpdateStatusTemplateEmailFreteService } from '../../../services/order/templatesEmailsFreteOrderStatus/UpdateStatusTemplateEmailFreteService';

class UpdateStatusTemplateEmailFreteController {
    async handle(req: Request, res: Response) {
        const templateFreteEmail_id = req.query.templateFreteEmail_id as string;

        const template = new UpdateStatusTemplateEmailFreteService();

        const updateTemplate = await template.execute({
            templateFreteEmail_id
        });

        return res.json(updateTemplate);

    }
}

export { UpdateStatusTemplateEmailFreteController }