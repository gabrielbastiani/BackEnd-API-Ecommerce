import { Request, Response } from 'express';
import { CepCartDeliveryAddressCustomerService } from '../../../../services/users/customer/deliveryAddressCustomer/CepCartDeliveryAddressCustomerService';

class CepCartDeliveryAddressCustomerController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const cep = req.query.cep as string;
        
        const updateAllDelivery = new CepCartDeliveryAddressCustomerService();

        const updateDelivery = await updateAllDelivery.execute({
            cep,
            customer_id
        });

        return res.json(updateDelivery);

    }
}

export { CepCartDeliveryAddressCustomerController }