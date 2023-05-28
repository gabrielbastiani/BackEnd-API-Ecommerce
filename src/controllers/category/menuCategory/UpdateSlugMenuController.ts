import { Request, Response } from 'express';
import { UpdateSlugMenuService } from '../../../services/category/menuCategory/UpdateSlugMenuService';

class UpdateSlugMenuController {
    async handle(req: Request, res: Response) {
        const menuCategory_id = req.query.menuCategory_id as string;

        const { slugCategory } = req.body;

        const slugUpdate = new UpdateSlugMenuService();

        const slugs = await slugUpdate.execute({
            menuCategory_id,
            slugCategory
        });

        return res.json(slugs);

    }
}

export { UpdateSlugMenuController }