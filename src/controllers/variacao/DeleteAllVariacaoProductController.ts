import { Request, Response } from "express";
import { DeleteAllVariacaoProductService } from "../../services/variacao/DeleteAllVariacaoProductService";

class DeleteAllVariacaoProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteVariacaoService = new DeleteAllVariacaoProductService();

    const variacaoDelete = await deleteVariacaoService.execute({
      product_id
    });

    return res.json(variacaoDelete);
  }
}

export { DeleteAllVariacaoProductController };