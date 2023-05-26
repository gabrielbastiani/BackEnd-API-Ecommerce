import { Request, Response } from 'express';
import { AllDescriptionsService } from '../../../services/product/descriptionProduct/AllDescriptionsService';

class AllDescriptionsController {
    async handle(req: Request, res: Response) {
        const descriptionProduct_id = req.query.descriptionProduct_id as string;

        const listDescriptions = new AllDescriptionsService();

        const descriptionsProducts = await listDescriptions.execute({ descriptionProduct_id });

        return res.json(descriptionsProducts);
    }
}

export { AllDescriptionsController }