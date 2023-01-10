import { Request, Response } from 'express';
import { EmailExportProductsService } from '../../services/sendEmails/EmailExportProductsService';

class EmailExportProductsController {
    async handle(req: Request, res: Response) {
        const listProducts = new EmailExportProductsService();
        const products = await listProducts.execute();

        return res.json(products);
    }
}

export { EmailExportProductsController }