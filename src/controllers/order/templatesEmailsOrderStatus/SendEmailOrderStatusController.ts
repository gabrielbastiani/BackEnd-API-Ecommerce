import { Request, Response } from "express";
import { SendEmailOrderStatusService } from "../../../services/order/templatesEmailsOrderStatus/SendEmailOrderStatusService"; 

class SendEmailOrderStatusController {
    async handle(req: Request, res: Response) {
        const orders = new SendEmailOrderStatusService();

        const senEmailorders = await orders.execute();

        return res.json(senEmailorders);

    }
}

export { SendEmailOrderStatusController }