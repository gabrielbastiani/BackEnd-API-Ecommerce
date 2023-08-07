import prismaClient from "../../../prisma";

interface CuponRequest {
    couponConditional_id: string;
    conditional: string;
    value: number;
}

class UpdateAllDataConditionalCuponService {
    async execute({ couponConditional_id, conditional, value }: CuponRequest) {
        const updateConditional = await prismaClient.couponConditional.update({
            where: {
                id: couponConditional_id
            },
            data: {
                conditional: conditional,
                value: value
            }
        })

        return updateConditional;

    }
}

export { UpdateAllDataConditionalCuponService }