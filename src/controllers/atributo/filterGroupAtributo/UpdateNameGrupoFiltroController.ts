import { Request, Response } from 'express';
import { UpdateNameGrupoFiltroService } from '../../../services/atributo/filterGroupAtributo/UpdateNameGrupoFiltroService';

class UpdateNameGrupoFiltroController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const { nameGroup } = req.body;

        const updateName = new UpdateNameGrupoFiltroService();

        const filtro = await updateName.execute({
            groupFilterAtributo_id,
            nameGroup
        });

        return res.json(filtro);

    }
}

export { UpdateNameGrupoFiltroController }