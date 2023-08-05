import prismaClient from '../../prisma';

interface CupomRequest {
    cupon_id: string;
}

class DeleteCuponService {
    async execute({ cupon_id }: CupomRequest) {
        const exactCupom = await prismaClient.coupon.delete({
            where: {
                id: cupon_id
            }
        })
        return exactCupom;
    }
}

export { DeleteCuponService }