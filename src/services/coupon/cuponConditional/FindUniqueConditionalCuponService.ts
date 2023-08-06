import prismaClient from "../../../prisma";

interface CupomRequest {
    couponConditional_id: string;
}

class FindUniqueConditionalCuponService {
    async execute({ couponConditional_id }: CupomRequest) {
        const cupomConditional = await prismaClient.couponConditional.findUnique({
            where: {
                id: couponConditional_id
            }
        })
        return cupomConditional;
    }
}

export { FindUniqueConditionalCuponService }