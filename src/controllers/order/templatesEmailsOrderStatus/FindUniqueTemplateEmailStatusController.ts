import { Request, Response } from 'express';
import { FindUniqueTemplateEmailStatusOrderService } from '../../../services/order/templatesEmailsOrderStatus/FindUniqueTemplateEmailStatusOrderService'; 

class FindUniqueTemplateEmailStatusController {
    async handle(req: Request, res: Response) {
        const slug_name_file_email = req.query.slug_name_file_email as string;

        const listEmails = new FindUniqueTemplateEmailStatusOrderService();
        const emails = await listEmails.execute({ slug_name_file_email });

        return res.json(emails);
    }
}

export { FindUniqueTemplateEmailStatusController }