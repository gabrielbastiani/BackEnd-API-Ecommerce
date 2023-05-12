import { Request, Response } from 'express';
import { UpdateSlugGroupFilterService } from '../../services/filtros/UpdateSlugGroupFilterService';

class UpdateSlugGroupFilterController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const { slugCategoryOrItem } = req.body;

        const updateSlug = new UpdateSlugGroupFilterService();

        const group = await updateSlug.execute({
            groupFilter_id,
            slugCategoryOrItem,
        });

        return res.json(group);

    }
}

export { UpdateSlugGroupFilterController }