import { Request, Response } from 'express';
import { UpdateStatusCounterProposalService } from '../../services/counterproposal/UpdateStatusCounterProposalService';

class UpdateStatusCounterProposalController {
    async handle(req: Request, res: Response) {
        const counterproposal_id = req.query.counterproposal_id as string;

        const { status } = req.body;

        const updateCounter = new UpdateStatusCounterProposalService();

        const counterProposal = await updateCounter.execute({
            counterproposal_id,
            status
        });

        return res.json(counterProposal);

    }
}

export { UpdateStatusCounterProposalController }