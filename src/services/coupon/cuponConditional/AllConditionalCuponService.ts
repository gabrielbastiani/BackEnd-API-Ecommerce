import prismaClient from "../../../prisma";

interface CupomRequest {
    cupon_id: string;
}

class AllConditionalCuponService {
    async execute({ cupon_id }: CupomRequest) {
        const exactCupom = await prismaClient.couponConditional.findMany({
            where: {
                cupon_id: cupon_id
            },
            include: {
                coupon: true
            }
        });

        return exactCupom;
    }
}

export { AllConditionalCuponService }