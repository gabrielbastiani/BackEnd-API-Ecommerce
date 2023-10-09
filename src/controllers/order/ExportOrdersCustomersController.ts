import { Request, Response } from 'express';
import { ExportOrdersCustomersService } from '../../services/order/ExportOrdersCustomersService';

class ExportOrdersCustomersController {
    async handle(req: Request, res: Response) {
        const listAllOrders = new ExportOrdersCustomersService();
        const oredersAll = await listAllOrders.execute();

        return res.json(oredersAll);
    }
}

export { ExportOrdersCustomersController }