import { Request, Response } from "express";
import { CreateEntregaService } from "../../../services/pedido/entrega/CreateEntregaService";

class CreateEntregaController {
    async handle(req: Request, res: Response) {
        const {
            tipo,
            custo,
            prazo,
            local,
            numero,
            complemento,
            bairro,
            CEP,
            cidade,
            estado,
            pedido_id,
            loja_id
        } = req.body;

        const createEntregaService = new CreateEntregaService();

        const entrega = await createEntregaService.execute({
            tipo,
            custo,
            prazo,
            local,
            numero,
            complemento,
            bairro,
            CEP,
            cidade,
            estado,
            pedido_id,
            loja_id
        })

        return res.json(entrega)

    }
}

export { CreateEntregaController }