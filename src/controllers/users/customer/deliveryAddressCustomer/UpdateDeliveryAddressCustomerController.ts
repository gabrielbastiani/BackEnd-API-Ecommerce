import { Request, Response } from 'express';
import { UpdateDeliveryAddressCustomerService } from '../../../../services/users/customer/deliveryAddressCustomer/UpdateDeliveryAddressCustomerService';

class UpdateDeliveryAddressCustomerController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const deliveryAddressCustomer_id = req.query.deliveryAddressCustomer_id as string;
        
        const updateAllDelivery = new UpdateDeliveryAddressCustomerService();

        const updateDelivery = await updateAllDelivery.execute({
            deliveryAddressCustomer_id,
            customer_id
        });

        return res.json(updateDelivery);

    }
}

export { UpdateDeliveryAddressCustomerController }