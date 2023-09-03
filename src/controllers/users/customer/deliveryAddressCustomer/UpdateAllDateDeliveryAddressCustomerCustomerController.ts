import { Request, Response } from 'express';
import { UpdateAllDateDeliveryAddressCustomerCustomerService } from '../../../../services/users/customer/deliveryAddressCustomer/UpdateAllDateDeliveryAddressCustomerCustomerService';

class UpdateAllDateDeliveryAddressCustomerCustomerController {
    async handle(req: Request, res: Response) {
        const deliveryAddressCustomer_id = req.query.deliveryAddressCustomer_id as string;
        const {
            addressee,
            address,
            number,
            complement,
            reference,
            neighborhood,
            cep,
            city,
            state,
            phone
        } = req.body;

        const updateAllDelivery = new UpdateAllDateDeliveryAddressCustomerCustomerService();

        const updateDelivery = await updateAllDelivery.execute({
            deliveryAddressCustomer_id,
            addressee,
            address,
            number,
            complement,
            reference,
            neighborhood,
            cep,
            city,
            state,
            phone
        });

        return res.json(updateDelivery);

    }
}

export { UpdateAllDateDeliveryAddressCustomerCustomerController }