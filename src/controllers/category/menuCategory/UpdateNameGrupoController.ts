import { Request, Response } from 'express';
import { UpdateNameGrupoService } from '../../../services/category/groupCategory/UpdateNameGrupoService';

class UpdateNameGrupoController {
    async handle(req: Request, res: Response) {
        const groupCategoy_id = req.query.groupCategoy_id;

        const { nameGroup } = req.body;

        const nameGroupUpdate = new UpdateNameGrupoService();

        const groupName = await nameGroupUpdate.execute({
            groupCategoy_id,
            nameGroup
        });

        return res.json(groupName);

    }
}

export { UpdateNameGrupoController }