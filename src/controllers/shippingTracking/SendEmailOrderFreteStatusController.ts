import { Request, Response } from "express";
import { SendEmailFreteOrderStatusService } from "../../services/shippingTracking/SendEmailFreteOrderStatusService";

class SendEmailOrderFreteStatusController {
    async handle(req: Request, res: Response) {

        const order_id = req.query.order_id as string;

        const orders = new SendEmailFreteOrderStatusService();
        const senEmailorders = await orders.execute({ order_id });

        return res.json(senEmailorders);

    }
}

export { SendEmailOrderFreteStatusController }