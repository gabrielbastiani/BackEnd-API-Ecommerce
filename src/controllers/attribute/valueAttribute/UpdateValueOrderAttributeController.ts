import { Request, Response } from 'express';
import { UpdateValueOrderAttributeService } from '../../../services/attribute/valueAttribute/UpdateValueOrderAttributeService';

class UpdateValueOrderAttributeController {
    async handle(req: Request, res: Response) {
        const valueAttribute_id = req.query.valueAttribute_id as string;

        const { order } = req.body;

        const updateValue = new UpdateValueOrderAttributeService();

        const attribute = await updateValue.execute({
            valueAttribute_id,
            order
        });

        return res.json(attribute);

    }
}

export { UpdateValueOrderAttributeController }