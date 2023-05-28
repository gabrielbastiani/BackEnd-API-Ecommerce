import { Request, Response } from 'express';
import { UpdateNameMenuService } from '../../../services/category/menuCategory/UpdateNameMenuService';

class UpdateNameMenuController {
    async handle(req: Request, res: Response) {
        const menuCategory_id = req.query.menuCategory_id as string;

        const { nameGroup } = req.body;

        const nameGroupUpdate = new UpdateNameMenuService();

        const groupName = await nameGroupUpdate.execute({
            menuCategory_id,
            nameGroup
        });

        return res.json(groupName);

    }
}

export { UpdateNameMenuController }