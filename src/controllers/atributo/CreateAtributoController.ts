import { Request, Response } from "express";
import { CreateAtributoService } from "../../services/atributo/CreateAtributoService";

class CreateAtributoController {
    async handle(req: Request, res: Response) {
        const {
            valor,
            slug,
            tipo,
            slugValor,
            loja_id
        } = req.body;

        const createAtributo = new CreateAtributoService();

        const atributo = await createAtributo.execute({
            valor,
            slug,
            tipo,
            slugValor,
            loja_id
        });

        return res.json(atributo)

    }
}

export { CreateAtributoController }