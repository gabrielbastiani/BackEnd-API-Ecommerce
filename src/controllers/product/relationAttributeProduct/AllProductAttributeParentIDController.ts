import { Request, Response } from 'express';
import { AllProductAttributeParentIDService } from '../../../services/product/relationAttributeProduct/AllProductAttributeParentIDService';

class AllProductAttributeParentIDController {
    async handle(req: Request, res: Response) {
        const parentId = req.query.parentId as string;

        const listProducts = new AllProductAttributeParentIDService();

        const productsAttributes = await listProducts.execute({ parentId });

        return res.json(productsAttributes);
    }
}

export { AllProductAttributeParentIDController }