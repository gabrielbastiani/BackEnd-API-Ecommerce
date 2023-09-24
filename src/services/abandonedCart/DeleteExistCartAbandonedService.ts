import prismaClient from "../../prisma";

class DeleteExistCartAbandonedService {
    async execute() {
        const abandoned = await prismaClient.abandonedCart.deleteMany();
        return abandoned;
    }
}

export { DeleteExistCartAbandonedService }