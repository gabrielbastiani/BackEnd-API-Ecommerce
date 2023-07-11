import prismaClient from '../../prisma';

class PageCounterProposalService {
    async execute(page = 1, limit = 15) {

        const skip = limit * (page - 1);

        const counterProposalAll = await prismaClient.counterProposal.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const counterProposals = await prismaClient.counterProposal.findMany({
            orderBy: {
                created_at: 'desc'
            },
            skip,
            take: limit
        });

        const data = {
            counterProposals,
            total: counterProposalAll.length,
            total_pages: Math.ceil(counterProposalAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageCounterProposalService }