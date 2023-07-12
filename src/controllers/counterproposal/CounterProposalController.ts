import { Request, Response } from 'express';
import { CounterProposalService } from '../../services/counterproposal/CounterProposalService';

class CounterProposalController {
    async handle(req: Request, res: Response) {
        const counterproposal_id = req.query.counterproposal_id as string;

        const { status, information, codeCoupon } = req.body;

        const updateCounter = new CounterProposalService();

        const counterProposal = await updateCounter.execute({
            counterproposal_id,
            status,
            information,
            codeCoupon
        });

        return res.json(counterProposal);

    }
}

export { CounterProposalController }