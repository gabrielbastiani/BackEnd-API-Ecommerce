import { Request, Response } from "express";
import { ListContatoService } from "../../services/contatos/ListContatoService";

class ListContatoController {
    async handle(req: Request, res: Response) {
        const contatos = new ListContatoService();

        const listContatos = await contatos.execute();

        return res.json(listContatos);

    }
}

export { ListContatoController }