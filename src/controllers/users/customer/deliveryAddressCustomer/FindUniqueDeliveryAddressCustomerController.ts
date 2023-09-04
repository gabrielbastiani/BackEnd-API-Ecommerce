import { Request, Response } from 'express';
import { FindUniqueDeliveryAddressCustomerService } from '../../../../services/users/customer/deliveryAddressCustomer/FindUniqueDeliveryAddressCustomerService';

class FindUniqueDeliveryAddressCustomerController {
    async handle(req: Request, res: Response) {
        const deliveryAddressCustomer_id = req.query.deliveryAddressCustomer_id as string;
        const listDelivery = new FindUniqueDeliveryAddressCustomerService();
        const delivery = await listDelivery.execute({ deliveryAddressCustomer_id });

        return res.json(delivery);
    }
}

export { FindUniqueDeliveryAddressCustomerController }