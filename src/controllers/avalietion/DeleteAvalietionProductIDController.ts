import { Request, Response } from "express";
import { DeleteAvalietionProductIDService } from "../../services/avalietion/DeleteAvalietionProductIDService";

class DeleteAvalietionProductIDController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const deleteAvalietion = new DeleteAvalietionProductIDService();

        const avaliacaoDelete = await deleteAvalietion.execute({
            product_id,
        });

        return res.json(avaliacaoDelete);
    }
}

export { DeleteAvalietionProductIDController };