import { Request, Response } from "express";
import { CreateFiltroAtributoService } from "../../../services/filtros/atributoFilter/CreateFiltroAtributoService";

class CreateFiltroAtributoController {
    async handle(req: Request, res: Response) {
        const {
            atributoName,
            valor,
            order,
            loja_id
        } = req.body;

        const filtroAtributo = new CreateFiltroAtributoService();

        const filtro = await filtroAtributo.execute({
            atributoName,
            valor,
            order,
            loja_id
        });

        return res.json(filtro)

    }
}

export { CreateFiltroAtributoController }