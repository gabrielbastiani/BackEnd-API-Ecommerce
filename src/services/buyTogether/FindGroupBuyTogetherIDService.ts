import prismaClient from "../../prisma";

interface BuyRequest {
    parentId: string;
}

class FindGroupBuyTogetherIDService {
    async execute({ parentId }: BuyRequest) {
        const allItensBuy = await prismaClient.buyTogether.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: {include: {photoproducts: true}},
                products: true
            }
        });

        return allItensBuy;

    }
}

export { FindGroupBuyTogetherIDService }