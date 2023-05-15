import { Request, Response } from "express";
import { CreateTipoAtributoService } from "../../../services/atributo/tipoDeAtributo/CreateTipoAtributoService";

class CreateTipoAtributoController {
    async handle(req: Request, res: Response) {
        const {
            slug,
            tipo,
            loja_id
        } = req.body;

        const createAtributo = new CreateTipoAtributoService();

        const atributo = await createAtributo.execute({
            slug,
            tipo,
            loja_id
        });

        return res.json(atributo)

    }
}

export { CreateTipoAtributoController }