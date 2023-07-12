import prismaClient from "../../prisma";

interface CounterRequest {
    counterproposal_id: string;
    codeCoupon: string;
}

class CodeCupomCounterProposalService {
    async execute({ counterproposal_id, codeCoupon }: CounterRequest) {
        const counterProposal = await prismaClient.counterProposal.update({
            where: {
                id: counterproposal_id
            },
            data: {
                codeCoupon: codeCoupon
            }
        })

        return counterProposal;

    }
}

export { CodeCupomCounterProposalService }