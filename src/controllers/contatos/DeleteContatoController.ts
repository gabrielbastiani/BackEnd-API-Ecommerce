import { Request, Response } from "express";
import { DeleteContatoService } from "../../services/contatos/DeleteContatoService";

class DeleteContatoController {
    async handle(req: Request, res: Response) {
        const contato_id = req.query.contato_id as string;

        const deleteContatos = new DeleteContatoService();

        const deleteContato = await deleteContatos.execute({
            contato_id,
        });

        return res.json(deleteContato);
    }
}

export { DeleteContatoController };