import { Request, Response } from "express";
import { UpdateAbandonedCartService } from "../../services/abandonedCart/UpdateAbandonedCartService";

class UpdateAbandonedCartController {
    async handle(req: Request, res: Response) {
        const {
            customer_id,
            cart_abandoned
        } = req.body;

        const cartAbandoned = new UpdateAbandonedCartService();

        const createAbandoned = await cartAbandoned.execute({
            customer_id,
            cart_abandoned
        });

        return res.json(createAbandoned);

    }
}

export { UpdateAbandonedCartController }