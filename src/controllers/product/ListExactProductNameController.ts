import { Request, Response } from 'express';
import { ListExactProductNameService } from '../../services/product/ListExactProductNameService';

class ListExactProductNameController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;
        const listExactProduct = new ListExactProductNameService();
        const product = await listExactProduct.execute({ slug });

        return res.json(product);
    }
}

export { ListExactProductNameController }