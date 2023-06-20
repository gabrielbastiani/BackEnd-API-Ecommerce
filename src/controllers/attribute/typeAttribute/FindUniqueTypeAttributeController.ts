import { Request, Response } from 'express';
import { FindUniqueTypeAttributeService } from '../../../services/attribute/typeAttribute/FindUniqueTypeAttributeService';

class FindUniqueTypeAttributeController {
    async handle(req: Request, res: Response) {
        const typeAttribute_id = req.query.typeAttribute_id as string;

        const findUnique = new FindUniqueTypeAttributeService();

        const attribute = await findUnique.execute({
            typeAttribute_id
        });

        return res.json(attribute);

    }
}

export { FindUniqueTypeAttributeController }