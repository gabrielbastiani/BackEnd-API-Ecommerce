import { Request, Response } from 'express';
import { AllTemplatesEmailsAbandonedCartService } from '../../../services/abandonedCart/templatesEmailsCartAbandoned/AllTemplatesEmailsAbandonedCartService';

class AllTemplatesEmailsAbandonedCartController {
    async handle(req: Request, res: Response) {

        const listEmails = new AllTemplatesEmailsAbandonedCartService();
        const emails = await listEmails.execute();

        return res.json(emails);
    }
}

export { AllTemplatesEmailsAbandonedCartController }