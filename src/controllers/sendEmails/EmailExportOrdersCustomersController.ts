import { Request, Response } from 'express';
import { EmailExportOrdersCustomersService } from '../../services/sendEmails/EmailExportOrdersCustomersService';

class EmailExportOrdersCustomersController {
    async handle(req: Request, res: Response) {
        const listOrders = new EmailExportOrdersCustomersService();
        const oreders = await listOrders.execute();

        return res.json(oreders);
    }
}

export { EmailExportOrdersCustomersController }