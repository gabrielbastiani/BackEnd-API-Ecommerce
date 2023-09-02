import { Request, Response } from 'express';
import { FindDeliveryAddressCustomerService } from '../../../../services/users/customer/deliveryAddressCustomer/FindDeliveryAddressCustomerService';

class FindDeliveryAddressCustomerController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const listDelivery = new FindDeliveryAddressCustomerService();
        const delivery = await listDelivery.execute({ customer_id });

        return res.json(delivery);
    }
}

export { FindDeliveryAddressCustomerController }