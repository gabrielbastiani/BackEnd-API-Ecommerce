import prismaClient from "../../../prisma";

interface AbandonedRequest {
    configAbandonedCart_id: string;
}

class FindUniqueConfigAbandonedCartService {
    async execute({ configAbandonedCart_id }: AbandonedRequest) {
        const abandoned = await prismaClient.configAbandonedCart.findUnique({
            where: {
                id: configAbandonedCart_id
            },
            include: {
                store: true,
                templatesabandonedscartsemail: true
            }
        });

        return abandoned;

    }
}

export { FindUniqueConfigAbandonedCartService }