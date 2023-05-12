import { Request, Response } from 'express';
import { UpdateAtributoNameService } from '../../services/filtros/UpdateAtributoNameService';

class UpdateAtributoNameController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const { atributoName } = req.body;

        const updateName = new UpdateAtributoNameService();

        const group = await updateName.execute({
            groupFilter_id,
            atributoName,
        });

        return res.json(group);

    }
}

export { UpdateAtributoNameController }