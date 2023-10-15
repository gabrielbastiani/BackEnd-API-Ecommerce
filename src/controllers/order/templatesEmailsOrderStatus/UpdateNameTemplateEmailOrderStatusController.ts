import { Request, Response } from 'express';
import { UpdateNameTemplateEmailOrderStatusService } from '../../../services/order/templatesEmailsOrderStatus/UpdateNameTemplateEmailOrderStatusService';

class UpdateNameTemplateEmailOrderStatusController {
    async handle(req: Request, res: Response) {

        const slug_name_file_email = req.query.slug_name_file_email as string;

        const {
            name_file_email
        } = req.body;

        const updateTemplates = new UpdateNameTemplateEmailOrderStatusService();

        const templates = await updateTemplates.execute({
            slug_name_file_email,
            name_file_email
        });

        return res.json(templates);

    }
}

export { UpdateNameTemplateEmailOrderStatusController }