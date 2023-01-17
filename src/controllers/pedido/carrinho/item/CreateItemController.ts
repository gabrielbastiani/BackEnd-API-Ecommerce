import { Request, Response } from "express";
import { CreateItemService } from "../../../../services/pedido/carrinho/item/CreateItemService";

class CreateItemController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
        } = req.body;

        const createItemService = new CreateItemService();

        const  item = await createItemService.execute({
            product_id,
            variacao_id,
            quantidade,
            precoUnitario,
        })

        return res.json(item);

    }
}

export { CreateItemController }