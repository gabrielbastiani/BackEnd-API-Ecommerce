import { Request, Response } from "express";
import { DeleteAvalietionService } from "../../services/avalietion/DeleteAvalietionService";

class DeleteAvalietionController {
    async handle(req: Request, res: Response) {
        const avalietion_id = req.query.avalietion_id as string;

        const deleteAvalietion = new DeleteAvalietionService();

        const avalietion = await deleteAvalietion.execute({
            avalietion_id,
        });

        return res.json(avalietion);
    }
}

export { DeleteAvalietionController };