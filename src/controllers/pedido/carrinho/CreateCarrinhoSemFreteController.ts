import { Request, Response } from "express";
import { CreateCarrinhoSemFreteService } from "../../../services/pedido/carrinho/CreateCarrinhoSemFreteService";

class CreateCarrinhoSemFreteController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
            loja_id
        } = req.body;

        const createCarrinhoSemFreteService = new CreateCarrinhoSemFreteService();

        const carrinho = await createCarrinhoSemFreteService.execute({
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
            loja_id
        })

        return res.json(carrinho)

    }
}

export { CreateCarrinhoSemFreteController }