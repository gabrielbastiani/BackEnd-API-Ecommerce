import prismaClient from "../../prisma";

class FindFirstCupomService {
    async execute() {
        const findFirst = await prismaClient.coupon.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                cupomsproducts: true
            }
        })
        return findFirst;
    }
}

export { FindFirstCupomService }