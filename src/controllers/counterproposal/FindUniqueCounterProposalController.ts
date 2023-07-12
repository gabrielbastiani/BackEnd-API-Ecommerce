import { Request, Response } from 'express';
import { FindUniqueCounterProposalService } from '../../services/counterproposal/FindUniqueCounterProposalService';

class FindUniqueCounterProposalController {
    async handle(req: Request, res: Response) {
        const counterproposal_id = req.query.counterproposal_id as string;
        const findCounter = new FindUniqueCounterProposalService();
        const counter = await findCounter.execute({ counterproposal_id });

        return res.json(counter);
    }
}

export { FindUniqueCounterProposalController }