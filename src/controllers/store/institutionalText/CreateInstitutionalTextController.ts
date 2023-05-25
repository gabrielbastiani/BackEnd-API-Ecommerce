import { Request, Response } from 'express';
import { CreateInstitutionalTextService } from '../../../services/store/institutionalText/CreateInstitutionalTextService';

class CreateInstitutionalTextController {
    async handle(req: Request, res: Response) {
        const {
            title,
            slug,
            order,
            position,
            slugPosition,
            description,
            store_id
        } = req.body;

        const createText = new CreateInstitutionalTextService();

        const text = await createText.execute({
            title,
            slug,
            order,
            position,
            slugPosition,
            description,
            store_id
        });

        return res.json(text)
    }
}

export { CreateInstitutionalTextController }