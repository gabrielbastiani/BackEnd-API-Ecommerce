import { Request, Response } from 'express';
import { ListExactProductService } from '../../services/product/ListExactProductService';

class ListExactProductController {
    async handle(req: Request, res: Response) {
        const { product_id } = req.query;
        const listExactProduct = new ListExactProductService();
        const product = await listExactProduct.execute({ product_id });

        return res.json(product);
    }
}

export { ListExactProductController }