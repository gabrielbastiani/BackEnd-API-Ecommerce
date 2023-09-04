import { Request, Response } from 'express';
import { SelectedDeliveryAddressCustomerService } from '../../../../services/users/customer/deliveryAddressCustomer/SelectedDeliveryAddressCustomerService';

class SelectedDeliveryAddressCustomerController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const listDelivery = new SelectedDeliveryAddressCustomerService();
        const delivery = await listDelivery.execute({ customer_id });

        return res.json(delivery);
    }
}

export { SelectedDeliveryAddressCustomerController }