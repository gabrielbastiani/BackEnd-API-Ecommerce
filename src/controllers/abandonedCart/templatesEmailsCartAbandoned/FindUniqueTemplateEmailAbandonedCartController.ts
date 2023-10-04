import { Request, Response } from 'express';
import { FindUniqueTemplateEmailAbandonedCartService } from '../../../services/abandonedCart/templatesEmailsCartAbandoned/FindUniqueTemplateEmailAbandonedCartService';

class FindUniqueTemplateEmailAbandonedCartController {
    async handle(req: Request, res: Response) {
        const slug_name_file_email = req.query.slug_name_file_email as string;

        const listEmails = new FindUniqueTemplateEmailAbandonedCartService();
        const emails = await listEmails.execute({ slug_name_file_email });

        return res.json(emails);
    }
}

export { FindUniqueTemplateEmailAbandonedCartController }