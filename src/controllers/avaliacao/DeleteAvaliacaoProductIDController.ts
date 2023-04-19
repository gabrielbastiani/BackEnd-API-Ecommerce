import { Request, Response } from "express";
import { DeleteAvaliacaoProductIDService } from "../../services/avaliacao/DeleteAvaliacaoProductIDService";

class DeleteAvaliacaoProductIDController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const deleteAvaliacaoService = new DeleteAvaliacaoProductIDService();

        const avaliacaoDelete = await deleteAvaliacaoService.execute({
            product_id,
        });

        return res.json(avaliacaoDelete);
    }
}

export { DeleteAvaliacaoProductIDController };