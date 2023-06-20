import { Request, Response } from 'express';
import { UpdateTypeAttributeService } from '../../../services/attribute/typeAttribute/UpdateTypeAttributeService';

class UpdateTypeAttributeController {
    async handle(req: Request, res: Response) {
        const typeAttribute_id = req.query.typeAttribute_id as string;

        const { type, slug } = req.body;

        const updateType = new UpdateTypeAttributeService();

        const attribute = await updateType.execute({
            typeAttribute_id,
            type,
            slug
        });

        return res.json(attribute);

    }
}

export { UpdateTypeAttributeController }