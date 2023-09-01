import { Request, Response } from "express";
import { CreateCartTotalFinishService } from "../../../services/cart/cartTotalFinish/CreateCartTotalFinishService"; 

class CreateCartTotalFinishController {
    async handle(req: Request, res: Response) {
        const {
            store_cart_id,
            totalCartFinish,
            customer_id
        } = req.body;

        const cart = new CreateCartTotalFinishService();

        const cartCustomer = await cart.execute({
            store_cart_id,
            totalCartFinish,
            customer_id
        });

        return res.json(cartCustomer);

    }
}

export { CreateCartTotalFinishController }