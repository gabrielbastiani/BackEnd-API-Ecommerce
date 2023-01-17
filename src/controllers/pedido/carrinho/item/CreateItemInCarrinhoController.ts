import { Request, Response } from "express";
import { CreateItemInCarrinhoService } from "../../../../services/pedido/carrinho/item/CreateItemInCarrinhoService";

class CreateItemInCarrinhoController {
    async handle(req: Request, res: Response) {
        
        const carrinho_id = req.query.carrinho_id as string;

        const {
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
        } = req.body;

        const createItemInCarrinhoService = new CreateItemInCarrinhoService();

        const  item = await createItemInCarrinhoService.execute({
            carrinho_id,
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
        })

        return res.json(item);

    }
}

export { CreateItemInCarrinhoController }