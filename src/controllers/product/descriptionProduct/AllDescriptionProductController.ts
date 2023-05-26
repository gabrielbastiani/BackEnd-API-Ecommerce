import { Request, Response } from 'express';
import { AllDescriptionProductService } from '../../../services/product/descriptionProduct/AllDescriptionProductService';

class AllDescriptionProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const listDescriptionProducts = new AllDescriptionProductService();

        const productsDescriptions = await listDescriptionProducts.execute({ product_id });

        return res.json(productsDescriptions);
    }
}

export { AllDescriptionProductController }