import { Request, Response } from "express";
import { CreateFiltroAtributoService } from "../../../services/filtros/atributoFilter/CreateFiltroAtributoService";

class CreateFiltroAtributoController {
    async handle(req: Request, res: Response) {
        const {
            groupFilter_id,
            valor,
            order,
            store_id
        } = req.body;

        const filtroAtributo = new CreateFiltroAtributoService();

        const filtro = await filtroAtributo.execute({
            groupFilter_id,
            valor,
            order,
            store_id
        });

        return res.json(filtro)

    }
}

export { CreateFiltroAtributoController }