import prismaClient from "../../prisma";

interface AbandonedRequest {
    abandonedCart_id: string;
}

class FindUniqueCartAbandonedService {
    async execute({ abandonedCart_id }: AbandonedRequest) {
        const abandoned = await prismaClient.abandonedCart.findUnique({
            where: {
                id: abandonedCart_id
            },
            include: {
                customer: true
            }
        });

        return abandoned;

    }
}

export { FindUniqueCartAbandonedService }