import { Request, Response } from 'express';
import { UpdateNameTemplateEmailAbandonedCartService } from '../../../services/abandonedCart/templatesEmailsCartAbandoned/UpdateNameTemplateEmailAbandonedCartService';

class UpdateNameTemplateEmailAbandonedController {
    async handle(req: Request, res: Response) {
        const templateAbandonedCartEmail_id = req.query.templateAbandonedCartEmail_id as string;

        const {
            name_file_email
        } = req.body;

        const updateTemplates = new UpdateNameTemplateEmailAbandonedCartService();

        const templates = await updateTemplates.execute({
            templateAbandonedCartEmail_id,
            name_file_email
        });

        return res.json(templates);

    }
}

export { UpdateNameTemplateEmailAbandonedController }