import { Request, Response } from 'express';
import { UpdateValueAttributeService } from '../../../services/attribute/valueAttribute/UpdateValueAttributeService';

class UpdateValueAttributeController {
    async handle(req: Request, res: Response) {
        const valueAttribute_id = req.query.valueAttribute_id as string;

        const { value, slug } = req.body;

        const updateValue = new UpdateValueAttributeService();

        const attribute = await updateValue.execute({
            valueAttribute_id,
            value,
            slug
        });

        return res.json(attribute);

    }
}

export { UpdateValueAttributeController }