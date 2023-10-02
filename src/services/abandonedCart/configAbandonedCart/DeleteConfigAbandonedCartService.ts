import prismaClient from "../../../prisma";

interface ConfigRequest {
    configAbandonedCart_id: string;
}

class DeleteConfigAbandonedCartService {
    async execute({ configAbandonedCart_id }: ConfigRequest) {

        await prismaClient.templateAbandonedCartEmail.deleteMany({
            where: {
                configAbandonedCart_id: configAbandonedCart_id
            }
        })

        const configs = await prismaClient.configAbandonedCart.delete({
            where: {
                id: configAbandonedCart_id
            }
        })

        return configs;
    }

}

export { DeleteConfigAbandonedCartService }