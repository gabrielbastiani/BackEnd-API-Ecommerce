import { Request, Response } from "express";
import { SendEmailFreteOrderStatusService } from "../../../services/order/templatesEmailsFreteOrderStatus/SendEmailFreteOrderStatusService";

class SendEmailOrderFreteStatusController {
    async handle(req: Request, res: Response) {
        const orders = new SendEmailFreteOrderStatusService();

        const senEmailorders = await orders.execute();

        return res.json(senEmailorders);

    }
}

export { SendEmailOrderFreteStatusController }