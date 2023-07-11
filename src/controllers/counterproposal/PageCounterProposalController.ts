import { Request, Response } from 'express';
import { PageCounterProposalService } from '../../services/counterproposal/PageCounterProposalService';

class PageCounterProposalController {
    async handle(req: Request, res: Response) {
        const pageListProposal = new PageCounterProposalService();

        const { page, limit } = req.query;

        const proposalPage = await pageListProposal.execute(Number(page), Number(limit));

        return res.json(proposalPage);
    }
}

export { PageCounterProposalController }