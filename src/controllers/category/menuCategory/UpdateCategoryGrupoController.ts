import { Request, Response } from 'express';
import { UpdateCategoryGrupoService } from '../../../services/category/groupCategory/UpdateCategoryGrupoService';

class UpdateCategoryGrupoController {
    async handle(req: Request, res: Response) {
        const groupCategoy_id = req.query.groupCategoy_id;

        const { category_id } = req.body;

        const updateCategory = new UpdateCategoryGrupoService();

        const categories = await updateCategory.execute({
            groupCategoy_id,
            category_id
        });

        return res.json(categories);

    }
}

export { UpdateCategoryGrupoController }