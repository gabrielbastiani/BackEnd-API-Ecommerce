import prismaClient from "../../prisma";

interface StoreRequest {
    store_id: string;
}

class DeleteStoreService {
    async execute({ store_id }: StoreRequest) {
        const store = await prismaClient.store.delete({
            where: {
                id: store_id
            }
        })

        return store;
    }

}

export { DeleteStoreService }