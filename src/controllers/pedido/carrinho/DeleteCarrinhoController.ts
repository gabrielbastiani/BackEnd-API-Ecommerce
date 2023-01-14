import { Request, Response } from "express";
import { DeleteCarrinhoService } from "../../../services/pedido/carrinho/DeleteCarrinhoService";

class DeleteCarrinhoController {
  async handle(req: Request, res: Response) {
    const carrinho_id = req.query.carrinho_id as string;

    const deleteCarrinhoService = new DeleteCarrinhoService();

    const carrinho = await deleteCarrinhoService.execute({
      carrinho_id,
    });

    return res.json(carrinho);
  }
}

export { DeleteCarrinhoController };