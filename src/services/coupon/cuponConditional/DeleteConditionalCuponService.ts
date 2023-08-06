import prismaClient from "../../../prisma";

interface CupomRequest {
    couponConditional_id: string;
}

class DeleteConditionalCuponService {
    async execute({ couponConditional_id }: CupomRequest) {
        const deleteConditional = await prismaClient.couponConditional.delete({
            where: {
                id: couponConditional_id
            }
        });
        
        return deleteConditional;
    }
}

export { DeleteConditionalCuponService }