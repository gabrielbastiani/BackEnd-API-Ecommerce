import { Request, Response } from 'express'
import { FindUniqueDescriptionProductService } from '../../../services/product/descriptionProduct/FindUniqueDescriptionProductService';

class FindUniqueDescriptionProductController {
    async handle(req: Request, res: Response) {
        const descriptionProduct_id = req.query.descriptionProduct_id as string;

        const findUnique = new FindUniqueDescriptionProductService();

        const find = await findUnique.execute({
            descriptionProduct_id
        });

        return res.json(find);

    }
}

export { FindUniqueDescriptionProductController }