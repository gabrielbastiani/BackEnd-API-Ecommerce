import { Request, Response } from 'express';
import { FindUniqueValueAttributeService } from '../../../services/attribute/valueAttribute/FindUniqueValueAttributeService';

class FindUniqueValueAttributeController {
    async handle(req: Request, res: Response) {
        const valueAttribute_id = req.query.valueAttribute_id as string;

        const findUnique = new FindUniqueValueAttributeService();

        const attribute = await findUnique.execute({
            valueAttribute_id
        });

        return res.json(attribute);

    }
}

export { FindUniqueValueAttributeController }