import { Request, Response } from 'express';
import { AllDescriptionProductInStoreService } from '../../../services/product/descriptionProduct/AllDescriptionProductInStoreService';

class AllDescriptionProductInStoreController {
    async handle(req: Request, res: Response) {

        const listAllDescription = new AllDescriptionProductInStoreService();

        const productsDescription = await listAllDescription.execute();

        return res.json(productsDescription);
    }
}

export { AllDescriptionProductInStoreController }