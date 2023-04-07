import { Request, Response } from 'express';
import { FindFirstProductService } from '../../services/product/FindFirstProductService';

class FindFirstProductController {
    async handle(req: Request, res: Response) {
        const listExactProduct = new FindFirstProductService();
        const product = await listExactProduct.execute();

        return res.json(product);
    }
}

export { FindFirstProductController }