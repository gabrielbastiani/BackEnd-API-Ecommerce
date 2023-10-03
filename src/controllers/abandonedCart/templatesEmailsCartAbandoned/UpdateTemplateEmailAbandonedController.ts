import { Request, Response } from 'express';
import { UpdateTemplateEmailAbandonedCartService } from '../../../services/abandonedCart/templatesEmailsCartAbandoned/UpdateTemplateEmailAbandonedCartService';

class UpdateTemplateEmailAbandonedController {
    async handle(req: Request, res: Response) {
        const templateAbandonedCartEmail_id = req.query.templateAbandonedCartEmail_id as string;

        const {
            name_file_email
        } = req.body;

        const updateTemplates = new UpdateTemplateEmailAbandonedCartService();

        const templates = await updateTemplates.execute({
            templateAbandonedCartEmail_id,
            name_file_email
        });

        return res.json(templates);

    }
}

export { UpdateTemplateEmailAbandonedController }