import prismaClient from "../../prisma";

interface CupomRequest {
    code: string;
}

class StockCupomService {
    async execute({ code }: CupomRequest) {
        const cupomStock = await prismaClient.coupon.updateMany({
            where: {
                code: code
            },
            data: {
                amountCoupon: {
                    decrement: 1
                }
            }
        });

        return cupomStock;

    }

}

export { StockCupomService }