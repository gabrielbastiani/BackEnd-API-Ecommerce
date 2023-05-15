import { Request, Response } from "express";
import { CreateValorAtributoService } from "../../../services/atributo/valorDeAtributo/CreateValorAtributoService";

class CreateValorAtributoController {
    async handle(req: Request, res: Response) {
        const {
            tipo,
            slugValor,
            valor,
            loja_id
        } = req.body;

        const createAtributo = new CreateValorAtributoService();

        const atributo = await createAtributo.execute({
            tipo,
            slugValor,
            valor,
            loja_id
        });

        return res.json(atributo)

    }
}

export { CreateValorAtributoController }