import { Request, Response } from 'express';
import { UpdateDescriptionProductService } from '../../../services/product/descriptionProduct/UpdateDescriptionProductService';

class UpdateDescriptionProductController {
    async handle(req: Request, res: Response) {
        const descriptionProduct_id = req.query.descriptionProduct_id as string;

        const { description } = req.body;

        const update = new UpdateDescriptionProductService();

        const descriptionUpdate = await update.execute({
            descriptionProduct_id,
            description
        });

        return res.json(descriptionUpdate);

    }
}

export { UpdateDescriptionProductController }