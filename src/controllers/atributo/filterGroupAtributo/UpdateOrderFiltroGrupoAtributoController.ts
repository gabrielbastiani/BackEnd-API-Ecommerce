import { Request, Response } from 'express';
import { UpdateOrderFiltroGrupoAtributoService } from '../../../services/atributo/filterGroupAtributo/UpdateOrderFiltroGrupoAtributoService';

class UpdateOrderFiltroGrupoAtributoController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const { order } = req.body;

        const updateOrder = new UpdateOrderFiltroGrupoAtributoService();

        const atributo = await updateOrder.execute({
            groupFilterAtributo_id,
            order
        });

        return res.json(atributo);

    }
}

export { UpdateOrderFiltroGrupoAtributoController }