import { Request, Response } from 'express';
import { UpdateSlugGrupoService } from '../../../services/category/groupCategory/UpdateSlugGrupoService';

class UpdateSlugGrupoController {
    async handle(req: Request, res: Response) {
        const groupCategoy_id = req.query.groupCategoy_id as string;

        const { slugCategory } = req.body;

        const slugUpdate = new UpdateSlugGrupoService();

        const slugs = await slugUpdate.execute({
            groupCategoy_id,
            slugCategory
        });

        return res.json(slugs);

    }
}

export { UpdateSlugGrupoController }