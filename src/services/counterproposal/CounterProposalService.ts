import prismaClient from "../../prisma";

interface CounterRequest {
    counterproposal_id: string;
    status: string;
    information: string;
    codeCoupon: string;
}

class CounterProposalService {
    async execute({ counterproposal_id, information, codeCoupon, status }: CounterRequest) {
        const counterProposal = await prismaClient.counterProposal.update({
            where: {
                id: counterproposal_id
            },
            data: {
                status: status,
                information: information,
                codeCoupon: codeCoupon
            }
        })

        return counterProposal;

    }
}

export { CounterProposalService }