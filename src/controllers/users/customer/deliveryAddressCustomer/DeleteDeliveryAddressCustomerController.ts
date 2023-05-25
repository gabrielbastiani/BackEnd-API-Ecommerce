import { Request, Response } from "express";
import { DeleteDeliveryAddressCustomerService } from "../../../../services/users/customer/deliveryAddressCustomer/DeleteDeliveryAddressCustomerService";

class DeleteDeliveryAddressCustomerController {
    async handle(req: Request, res: Response) {
        const deliveryAddressCustomer_id = req.query.deliveryAddressCustomer_id as string;

        const deleteDelivery = new DeleteDeliveryAddressCustomerService();

        const deliveryDelete = await deleteDelivery.execute({
            deliveryAddressCustomer_id,
        });

        return res.json(deliveryDelete);
    }
}

export { DeleteDeliveryAddressCustomerController };