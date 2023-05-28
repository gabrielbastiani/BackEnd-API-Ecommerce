import { Request, Response } from 'express';
import { UpdateItemNameGrupoService } from '../../../services/category/groupCategory/UpdateItemNameGrupoService';

class UpdateItemNameGrupoController {
    async handle(req: Request, res: Response) {
        const groupCategoy_id = req.query.groupCategoy_id as string;

        const { itemName } = req.body;

        const nameGroupUpdate = new UpdateItemNameGrupoService();

        const groupName = await nameGroupUpdate.execute({
            groupCategoy_id,
            itemName
        });

        return res.json(groupName);

    }
}

export { UpdateItemNameGrupoController }