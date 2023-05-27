import { Request, Response } from 'express'
import { CreateAvalietionService } from '../../services/avalietion/CreateAvalietionService'

class CreateAvalietionController {
    async handle(req: Request, res: Response) {
        const { customer_id, description, point, status, product_id, store_id } = req.body;

        const createAvalietion = new CreateAvalietionService();

        const avalietion = await createAvalietion.execute({
            customer_id,
            description,
            point,
            status,
            product_id,
            store_id
        });

        return res.json(avalietion);

    }
}

export { CreateAvalietionController }