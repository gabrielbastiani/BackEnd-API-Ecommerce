import { Request, Response } from "express";
import { CreateCartService } from "../../services/cart/CreateCartService";

class CreateCartController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            store_cart_id,
            amount,
            total
        } = req.body;

        const cart = new CreateCartService();

        const cartCustomer = await cart.execute({
            product_id,
            store_cart_id,
            amount,
            total
        });

        return res.json(cartCustomer);

    }
}

export { CreateCartController }