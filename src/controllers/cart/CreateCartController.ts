import { Request, Response } from "express";
import { CreateCartService } from "../../services/cart/CreateCartService";

class CreateCartController {
    async handle(req: Request, res: Response) {
        const {
            customer_id,
            product_id,
            image,
            name,
            amount,
            price,
            relationattributeproducts,
            stock,
            weight,
            width,
            height,
            depth,
            total
        } = req.body;

        const cart = new CreateCartService();

        const cartCustomer = await cart.execute({
            customer_id,
            product_id,
            image,
            name,
            amount,
            price,
            relationattributeproducts,
            stock,
            weight,
            width,
            height,
            depth,
            total
        });

        return res.json(cartCustomer);

    }
}

export { CreateCartController }