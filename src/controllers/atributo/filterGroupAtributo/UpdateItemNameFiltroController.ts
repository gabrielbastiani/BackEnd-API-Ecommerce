import { Request, Response } from 'express';
import { UpdateItemNameFiltroService } from '../../../services/atributo/filterGroupAtributo/UpdateItemNameFiltroService';

class UpdateItemNameFiltroController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const { itemName } = req.body;

        const updateItem = new UpdateItemNameFiltroService();

        const filtro = await updateItem.execute({
            groupFilterAtributo_id,
            itemName
        });

        return res.json(filtro);

    }
}

export { UpdateItemNameFiltroController }