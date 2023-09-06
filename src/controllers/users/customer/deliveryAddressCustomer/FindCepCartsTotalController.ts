import { Request, Response } from 'express';
import { FindCepCartsTotalService } from '../../../../services/users/customer/deliveryAddressCustomer/FindCepCartsTotalService'; 

class FindCepCartsTotalController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const cep = req.query.cep as string;

        const listCart = new FindCepCartsTotalService();
        const cartList = await listCart.execute({ customer_id, cep });

        return res.json(cartList);
    }
}

export { FindCepCartsTotalController }