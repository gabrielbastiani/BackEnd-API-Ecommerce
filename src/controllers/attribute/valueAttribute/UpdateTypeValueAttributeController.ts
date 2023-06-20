import { Request, Response } from 'express';
import { UpdateTypeValueAttributeService } from '../../../services/attribute/valueAttribute/UpdateTypeValueAttributeService';

class UpdateTypeValueAttributeController {
    async handle(req: Request, res: Response) {
        const valueAttribute_id = req.query.valueAttribute_id as string;

        const { type, slug } = req.body;

        const updateValue = new UpdateTypeValueAttributeService();

        const attribute = await updateValue.execute({
            valueAttribute_id,
            type,
            slug
        });

        return res.json(attribute);

    }
}

export { UpdateTypeValueAttributeController }