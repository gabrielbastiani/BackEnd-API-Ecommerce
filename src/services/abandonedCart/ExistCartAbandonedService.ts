import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
}

class ExistCartAbandonedService {
    async execute({ customer_id }: AbandonedRequest) {
        const abandoned = await prismaClient.abandonedCart.findFirst({
            where: {
                customer_id: customer_id
            }
        });

        return abandoned;

    }
}

export { ExistCartAbandonedService }