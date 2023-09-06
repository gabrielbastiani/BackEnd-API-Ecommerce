import { Request, Response } from "express";
import { CreateCartsTotalService } from "../../../services/cart/cartsTotal/CreateCartsTotalService"; 

class CreateCartsTotalController {
    async handle(req: Request, res: Response) {
        const {
            store_cart_id,
            total,
            customer_id,
            cep
        } = req.body;

        const cart = new CreateCartsTotalService();

        const cartCustomer = await cart.execute({
            store_cart_id,
            total,
            customer_id,
            cep
        });

        return res.json(cartCustomer);

    }
}

export { CreateCartsTotalController }