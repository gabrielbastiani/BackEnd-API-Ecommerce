import { Request, Response } from "express";
import { UpdateAbandonedCartService } from "../../services/abandonedCart/UpdateAbandonedCartService";

class UpdateAbandonedCartController {
    async handle(req: Request, res: Response) {

        const customer_id = req.query.customer_id as string;
        
        const {
            cart_abandoned,
            total_cart
        } = req.body;

        const cartAbandoned = new UpdateAbandonedCartService();

        const createAbandoned = await cartAbandoned.execute({
            customer_id,
            cart_abandoned,
            total_cart
        });

        return res.json(createAbandoned);

    }
}

export { UpdateAbandonedCartController }