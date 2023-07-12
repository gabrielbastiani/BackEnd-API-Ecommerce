import { Request, Response } from 'express';
import { CodeCupomCounterProposalService } from '../../services/counterproposal/CodeCupomCounterProposalService';

class CodeCupomCounterProposalController {
    async handle(req: Request, res: Response) {
        const counterproposal_id = req.query.counterproposal_id as string;

        const { codeCoupon } = req.body;

        const updateCounter = new CodeCupomCounterProposalService();

        const counterProposal = await updateCounter.execute({
            counterproposal_id,
            codeCoupon
        });

        return res.json(counterProposal);

    }
}

export { CodeCupomCounterProposalController }