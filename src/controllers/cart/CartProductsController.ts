import { Request, Response } from 'express';
import { CartProductsService } from '../../services/cart/CartProductsService'; 

class CartProductsController {
    async handle(req: Request, res: Response) {

        const { product_id } = req.query;

        const listProducts = new CartProductsService();

        const cartProduct = await listProducts.execute({ product_id });

        return res.json(cartProduct);
    }
}

export { CartProductsController }