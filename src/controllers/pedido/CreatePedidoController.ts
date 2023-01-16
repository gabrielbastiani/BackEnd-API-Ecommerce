import { Request, Response } from "express";
import { CreatePedidoService } from "../../services/pedido/CreatePedidoService";

class CreatePedidoController {
    async handle(req: Request, res: Response) {
        const {
            loja_id,
            user_id,
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
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
        } = req.body;

        const createPedidoService = new CreatePedidoService();

        const pedido = await createPedidoService.execute({
            loja_id,
            user_id,
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
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
        })

        return res.json(pedido);

    }
}

export { CreatePedidoController }