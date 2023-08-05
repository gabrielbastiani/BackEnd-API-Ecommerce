import prismaClient from "../../prisma";

interface CuponRequest {
    cupon_id: string;
    name: string;
    description: string;
    code: string;
    startDate: string;
    endDate: string;
    amountCoupon: number;
    conditional: string;
}

class UpdateAllDateCuponService {
    async execute({
        cupon_id,
        name,
        description,
        code,
        startDate,
        endDate,
        amountCoupon,
        conditional
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
                amountCoupon: amountCoupon,
                conditional: conditional
            }
        })

        return updateCupon;

    }
}

export { UpdateAllDateCuponService }