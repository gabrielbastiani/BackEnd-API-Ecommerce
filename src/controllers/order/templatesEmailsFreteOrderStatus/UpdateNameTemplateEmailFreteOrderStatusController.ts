import { Request, Response } from 'express';
import { UpdateNameTemplateEmailFreteOrderStatusService } from '../../../services/order/templatesEmailsFreteOrderStatus/UpdateNameTemplateEmailFreteOrderStatusService';

class UpdateNameTemplateEmailFreteOrderStatusController {
    async handle(req: Request, res: Response) {

        const slug_name_file_email = req.query.slug_name_file_email as string;

        const {
            name_file_email
        } = req.body;

        const updateTemplates = new UpdateNameTemplateEmailFreteOrderStatusService();

        const templates = await updateTemplates.execute({
            slug_name_file_email,
            name_file_email
        });

        return res.json(templates);

    }
}

export { UpdateNameTemplateEmailFreteOrderStatusController }