import { Request, Response } from 'express';
import { AllProductAttributeService } from '../../../services/product/relationAttributeProduct/AllProductAttributeService';

class AllProductAttributeController {
    async handle(req: Request, res: Response) {
        const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

        const listProducts = new AllProductAttributeService();

        const productsAttributes = await listProducts.execute({ relationAttributeProduct_id });

        return res.json(productsAttributes);
    }
}

export { AllProductAttributeController }