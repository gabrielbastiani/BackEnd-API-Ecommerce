import prismaClient from "../../../prisma";

interface CupomRequest {
    cupon_id: string;
}

class AllProductsCuponService {
    async execute({ cupon_id }: CupomRequest) {
        const exactCupom = await prismaClient.cuponProduct.findMany({
            where: {
                cupon_id: cupon_id
            },
            include: {
                coupon: true,
                product: true
            }
        });

        return exactCupom;
    }
}

export { AllProductsCuponService }