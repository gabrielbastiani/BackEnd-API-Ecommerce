import { Request, Response } from 'express';
import { FindUniqueTemplateEmailAbandonedCartService } from '../../../services/abandonedCart/templatesEmailsCartAbandoned/FindUniqueTemplateEmailAbandonedCartService';

class FindUniqueTemplateEmailAbandonedCartController {
    async handle(req: Request, res: Response) {
        const templateAbandonedCartEmail_id = req.query.templateAbandonedCartEmail_id as string;

        const listEmails = new FindUniqueTemplateEmailAbandonedCartService();
        const emails = await listEmails.execute({ templateAbandonedCartEmail_id });

        return res.json(emails);
    }
}

export { FindUniqueTemplateEmailAbandonedCartController }