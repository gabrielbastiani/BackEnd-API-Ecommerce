import { Request, Response } from 'express';
import { FavoritesProductsService } from '../../services/search/FavoritesProductsService';

class FavoritesProductsController {
    async handle(req: Request, res: Response) {
        const { page, limit, product_id } = req.query;

        const listProducts = new FavoritesProductsService();

        const filterProduct = await listProducts.execute( Number(page), Number(limit), product_id );

        return res.json(filterProduct);
    }
}

export { FavoritesProductsController }