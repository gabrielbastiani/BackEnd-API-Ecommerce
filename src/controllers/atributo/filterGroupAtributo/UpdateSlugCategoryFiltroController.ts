import { Request, Response } from 'express';
import { UpdateSlugCategoryGrupoFiltroService } from '../../../services/atributo/filterGroupAtributo/UpdateSlugCategoryGrupoFiltroService';

class UpdateSlugCategoryFiltroController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const { slugCategoryOrItem } = req.body;

        const updateSlug = new UpdateSlugCategoryGrupoFiltroService();

        const filtro = await updateSlug.execute({
            groupFilterAtributo_id,
            slugCategoryOrItem
        });

        return res.json(filtro);

    }
}

export { UpdateSlugCategoryFiltroController }