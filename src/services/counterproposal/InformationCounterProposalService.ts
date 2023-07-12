import prismaClient from "../../prisma";

interface CounterRequest {
    counterproposal_id: string;
    information: string;
}

class InformationCounterProposalService {
    async execute({ counterproposal_id, information }: CounterRequest) {
        const counterProposal = await prismaClient.counterProposal.update({
            where: {
                id: counterproposal_id
            },
            data: {
                information: information
            }
        })

        return counterProposal;

    }
}

export { InformationCounterProposalService }