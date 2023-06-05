import { Request, Response } from 'express';
import { AllValueAttributeService } from '../../../services/product/relationAttributeProduct/AllValueAttributeService';

class AllValueAttributeController {
    async handle(req: Request, res: Response) {

        const listProducts = new AllValueAttributeService();

        const productsAttributes = await listProducts.execute();

        return res.json(productsAttributes);
    }
}

export { AllValueAttributeController }