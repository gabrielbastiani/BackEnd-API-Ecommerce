import { Request, Response } from 'express';
import { CartProductsService } from '../../services/cart/CartProductsService'; 

class CartProductsController {
    async handle(req: Request, res: Response) {

        const store_cart_id = req.query.store_cart_id as string;

        const listProducts = new CartProductsService();

        const cartProduct = await listProducts.execute({ store_cart_id });

        return res.json(cartProduct);
    }
}

export { CartProductsController }