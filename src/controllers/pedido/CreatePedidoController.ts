import { Request, Response } from "express";
import { CreatePedidoService } from "../../services/pedido/CreatePedidoService";

class CreatePedidoController {
    async handle(req: Request, res: Response) {
        const {
            loja_id,
            user_id,
            custoEntrega,
            prazoEntrega,
            tipoEntrega,
            valorPagamento,
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
            status,
            pagamento_id
        } = req.body;

        const createPedidoService = new CreatePedidoService();

        const pedido = await createPedidoService.execute({
            loja_id,
            user_id,
            custoEntrega,
            prazoEntrega,
            tipoEntrega,
            valorPagamento,
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
            status,
            pagamento_id
        })

        return res.json(pedido);

    }
}

export { CreatePedidoController }