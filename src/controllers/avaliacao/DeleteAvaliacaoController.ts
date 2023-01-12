import { Request, Response } from "express";
import { DeleteAvaliacaoService } from "../../services/avaliacao/DeleteAvaliacaoService";

class DeleteAvaliacaoController {
    async handle(req: Request, res: Response) {
        const avaliacao_id = req.query.avaliacao_id as string;

        const deleteAvaliacaoService = new DeleteAvaliacaoService();

        const avaliacaoDelete = await deleteAvaliacaoService.execute({
            avaliacao_id,
        });

        return res.json(avaliacaoDelete);
    }
}

export { DeleteAvaliacaoController };