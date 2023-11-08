import { Request, Response } from 'express';
import { FindUniqueTemplateEmailFreteStatusOrderService } from '../../../services/order/templatesEmailsFreteOrderStatus/FindUniqueTemplateEmailFreteStatusOrderService';

class FindUniqueTemplateEmailFreteStatusController {
    async handle(req: Request, res: Response) {
        const slug_name_file_email = req.query.slug_name_file_email as string;

        const listEmails = new FindUniqueTemplateEmailFreteStatusOrderService();
        const emails = await listEmails.execute({ slug_name_file_email });

        return res.json(emails);
    }
}

export { FindUniqueTemplateEmailFreteStatusController }