import { Request, Response } from 'express';
import { InformationCounterProposalService } from '../../services/counterproposal/InformationCounterProposalService';

class InformationCounterProposalController {
    async handle(req: Request, res: Response) {
        const counterproposal_id = req.query.counterproposal_id as string;

        const { information } = req.body;

        const updateCounter = new InformationCounterProposalService();

        const counterProposal = await updateCounter.execute({
            counterproposal_id,
            information
        });

        return res.json(counterProposal);

    }
}

export { InformationCounterProposalController }