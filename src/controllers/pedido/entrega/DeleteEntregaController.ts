import { Request, Response } from "express";
import { DeleteEntregaService } from "../../../services/pedido/entrega/DeleteEntregaService";

class DeleteEntregaController {
  async handle(req: Request, res: Response) {
    const entrega_id = req.query.entrega_id as string;

    const deleteEntregaService = new DeleteEntregaService();

    const entrega = await deleteEntregaService.execute({
      entrega_id,
    });

    return res.json(entrega);
  }
}

export { DeleteEntregaController };