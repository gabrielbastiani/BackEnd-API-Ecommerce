import { Request, Response } from 'express';
import { AllTemplatesEmailsOrderService } from '../../../services/order/templatesEmailsOrderStatus/AllTemplatesEmailsOrderService'; 

class AllTemplatesEmailsOrderController {
    async handle(req: Request, res: Response) {

        const listEmails = new AllTemplatesEmailsOrderService();
        const emails = await listEmails.execute();

        return res.json(emails);
    }
}

export { AllTemplatesEmailsOrderController }