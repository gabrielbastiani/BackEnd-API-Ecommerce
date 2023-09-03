import { Request, Response } from 'express'
import { CreateDeliveryAddressCustomerService } from '../../../../services/users/customer/deliveryAddressCustomer/CreateDeliveryAddressCustomerService';

class CreateDeliveryAddressCustomerController {
    async handle(req: Request, res: Response) {
        const {
            customer_id,
            addressee,
            address,
            number,
            complement,
            reference,
            neighborhood,
            cep,
            city,
            state,
            phone,
            store_id
        } = req.body;

        const createUserService = new CreateDeliveryAddressCustomerService();

        const delivery = await createUserService.execute({
            customer_id,
            addressee,
            address,
            number,
            complement,
            reference,
            neighborhood,
            cep,
            city,
            state,
            phone,
            store_id
        });

        return res.json(delivery)
    }
}

export { CreateDeliveryAddressCustomerController }