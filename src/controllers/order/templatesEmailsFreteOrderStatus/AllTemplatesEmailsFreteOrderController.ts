import { Request, Response } from 'express';
import { AllTemplatesEmailsFreteOrderService } from '../../../services/order/templatesEmailsFreteOrderStatus/AllTemplatesEmailsFreteOrderService'; 

class AllTemplatesEmailsFreteOrderController {
    async handle(req: Request, res: Response) {

        const listEmails = new AllTemplatesEmailsFreteOrderService();
        const emails = await listEmails.execute();

        return res.json(emails);
    }
}

export { AllTemplatesEmailsFreteOrderController }