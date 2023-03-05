import { Request, Response } from "express";
import { DeleteVariacaoService } from "../../services/variacao/DeleteVariacaoService";

class DeleteVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id as string;

    const deleteVariacaoService = new DeleteVariacaoService();

    const variacaoDelete = await deleteVariacaoService.execute({
      variacao_id
    });

    return res.json(variacaoDelete);
  }
}

export { DeleteVariacaoController };