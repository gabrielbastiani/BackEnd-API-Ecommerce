import { Request, Response } from 'express';
import { FindUniqueAvalietionService } from '../../services/avalietion/FindUniqueAvalietionService';

class FindUniqueAvalietionController {
    async handle(req: Request, res: Response) {
        const avalietion_id = req.query.avalietion_id as string;

        const avalietionDate = new FindUniqueAvalietionService();

        const avalietion = await avalietionDate.execute({ avalietion_id });

        return res.json(avalietion);
    }
}

export { FindUniqueAvalietionController }