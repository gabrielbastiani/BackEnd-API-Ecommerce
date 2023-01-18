import { Request, Response } from "express";
import { DeletePagamentoService } from "../../services/pagamento/DeletePagamentoService";

class DeletePagamentoController {
  async handle(req: Request, res: Response) {
    const pagamento_id = req.query.pagamento_id as string;

    const deletePagamentoService = new DeletePagamentoService();

    const carrinho = await deletePagamentoService.execute({
      pagamento_id,
    });

    return res.json(carrinho);
  }
}

export { DeletePagamentoController };