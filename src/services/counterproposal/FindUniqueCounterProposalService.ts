import prismaClient from '../../prisma';

interface CounterRequest {
    counterproposal_id: string;
}

class FindUniqueCounterProposalService {
    async execute({ counterproposal_id }: CounterRequest) {
        const exactCounter = await prismaClient.counterProposal.findUnique({
            where: {
                id: counterproposal_id
            }
        })
        return exactCounter;
    }
}

export { FindUniqueCounterProposalService }