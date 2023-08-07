import prismaClient from '../../prisma';

interface CupomRequest {
    code: string;
}

class FindCuponService {
    async execute({ code }: CupomRequest) {
        const exactCupom = await prismaClient.coupon.findFirst({
            where: {
                code: code
            },
            include: {
                coupomsconditionals: true,
                cupomsproducts: true
            }
        })
        return exactCupom;
    }
}

export { FindCuponService }