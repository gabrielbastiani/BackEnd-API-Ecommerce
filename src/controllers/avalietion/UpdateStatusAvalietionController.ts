import { Request, Response } from 'express';
import { UpdateStatusAvalietionService } from '../../services/avalietion/UpdateStatusAvalietionService';

class UpdateStatusAvalietionController {
    async handle(req: Request, res: Response) {
        const avalietion_id = req.query.avalietion_id as string;

        const { status } = req.body;

        const updateAvalietion = new UpdateStatusAvalietionService();

        const avalietion = await updateAvalietion.execute({
            avalietion_id,
            status
        });

        return res.json(avalietion);

    }
}

export { UpdateStatusAvalietionController }