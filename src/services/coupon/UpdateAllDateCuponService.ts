import prismaClient from "../../prisma";

interface CuponRequest {
    cupon_id: string;
    name: string;
    description: string;
    code: string;
    startDate: string;
    endDate: string;
    amountCoupon: number;
}

class UpdateAllDateCuponService {
    async execute({
        cupon_id,
        name,
        description,
        code,
        startDate,
        endDate,
        amountCoupon
    }: CuponRequest) {
        const updateCupon = await prismaClient.coupon.update({
            where: {
                id: cupon_id
            },
            data: {
                name: name,
                description: description,
                code: code,
                startDate: startDate,
                endDate: endDate,
                amountCoupon: amountCoupon
            }
        })

        return updateCupon;

    }
}

export { UpdateAllDateCuponService }