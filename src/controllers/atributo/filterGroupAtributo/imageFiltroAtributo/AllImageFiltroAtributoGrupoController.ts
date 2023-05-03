import { Request, Response } from 'express';
import { AllImageFiltroAtributoGrupoService } from '../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/AllImageFiltroAtributoGrupoService';

class AllImageFiltroAtributoGrupoController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const listImagesFiltro = new AllImageFiltroAtributoGrupoService();

        const filtroImages = await listImagesFiltro.execute({ groupFilterAtributo_id });

        return res.json(filtroImages);
    }
}

export { AllImageFiltroAtributoGrupoController }