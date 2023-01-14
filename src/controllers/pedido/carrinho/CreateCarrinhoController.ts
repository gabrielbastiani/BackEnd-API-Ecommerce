import { Request, Response } from "express";
import { CreateCarrinhoService } from "../../../services/pedido/carrinho/CreateCarrinhoService";

class CreateCarrinhoController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
            custoEntrega,
            prazoEntrega,
            tipoEntrega,
            valorPagamento,
            loja_id
        } = req.body;

        const createCarrinhoService = new CreateCarrinhoService();

        const carrinho = await createCarrinhoService.execute({
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
            custoEntrega,
            prazoEntrega,
            tipoEntrega,
            valorPagamento,
            loja_id
        })

        return res.json(carrinho)

    }
}

export { CreateCarrinhoController }