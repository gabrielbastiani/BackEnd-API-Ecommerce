import { Request, Response } from 'express';
import { AllTagProductService } from '../../../services/product/tag/AllTagProductService';

class AllTagProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listAllTagProduct = new AllTagProductService();

        const productTags = await listAllTagProduct.execute({ product_id });

        return res.json(productTags);
    }
}

export { AllTagProductController }