import { Request, Response } from 'express';
import { UpdateTitleDescriptionProductService } from '../../../services/product/descriptionProduct/UpdateTitleDescriptionProductService';

class UpdateTitleDescriptionProductController {
    async handle(req: Request, res: Response) {
        const descriptionProduct_id = req.query.descriptionProduct_id as string;

        const { title } = req.body;

        const updateTitle = new UpdateTitleDescriptionProductService();

        const description = await updateTitle.execute({
            descriptionProduct_id,
            title
        });

        return res.json(description);

    }
}

export { UpdateTitleDescriptionProductController }