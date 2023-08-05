import prismaClient from '../../prisma';

interface CupomRequest {
    cupon_id: string;
}

class FindUniqueCuponService {
    async execute({ cupon_id }: CupomRequest) {
        const exactCupom = await prismaClient.coupon.findUnique({
            where: {
                id: cupon_id
            },
            include: {
                cupomsproducts: true
            }
        })
        return exactCupom;
    }
}

export { FindUniqueCuponService }