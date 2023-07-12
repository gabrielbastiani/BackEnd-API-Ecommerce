import prismaClient from "../../prisma";

interface CounterRequest {
    counterproposal_id: string;
    status: string;
}

class UpdateStatusCounterProposalService {
    async execute({ counterproposal_id, status }: CounterRequest) {
        const counterProposal = await prismaClient.counterProposal.update({
            where: {
                id: counterproposal_id
            },
            data: {
                status: status
            }
        })

        return counterProposal;

    }
}

export { UpdateStatusCounterProposalService }