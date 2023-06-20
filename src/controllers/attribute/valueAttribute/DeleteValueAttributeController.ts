import { Request, Response } from 'express';
import { DeleteValueAttributeService } from '../../../services/attribute/valueAttribute/DeleteValueAttributeService';

class DeleteValueAttributeController {
    async handle(req: Request, res: Response) {
        const valueAttribute_id = req.query.valueAttribute_id as string;

        const updateValue = new DeleteValueAttributeService();

        const attribute = await updateValue.execute({
            valueAttribute_id,
        });

        return res.json(attribute);

    }
}

export { DeleteValueAttributeController }