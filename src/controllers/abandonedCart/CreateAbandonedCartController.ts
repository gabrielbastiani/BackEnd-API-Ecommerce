import { Request, Response } from "express";
import { CreateAbandonedCartService } from "../../services/abandonedCart/CreateAbandonedCartService";

class CreateAbandonedCartController {
    async handle(req: Request, res: Response) {
        const {
            customer_id,
            store_cart_id,
            cart_abandoned,
            total_cart
        } = req.body;

        const cartAbandoned = new CreateAbandonedCartService();

        const createAbandoned = await cartAbandoned.execute({
            customer_id,
            store_cart_id,
            cart_abandoned,
            total_cart
        });

        return res.json(createAbandoned);

    }
}

export { CreateAbandonedCartController }