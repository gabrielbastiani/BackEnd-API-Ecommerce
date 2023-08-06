import prismaClient from "../../../prisma";

interface CuponRequest {
    cupon_id: string;
    conditional: string;
    action: string;
    value: number;
}

class CreateCuponConditionalService {
    async execute({ cupon_id, conditional, action, value }: CuponRequest) {
        const conditionalCupom = await prismaClient.couponConditional.create({
            data: {
                cupon_id: cupon_id,
                conditional: conditional,
                value: value
            }
        });

        return conditionalCupom;

    }
}

export { CreateCuponConditionalService }