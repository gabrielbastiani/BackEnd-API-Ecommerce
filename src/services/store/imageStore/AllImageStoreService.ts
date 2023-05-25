import prismaClient from "../../../prisma";

class AllImageStoreService {
    async execute() {
        const images = await prismaClient.imageStore.findMany({
            orderBy: {
                order: 'asc'
            }
        });

        return images;

    }
}

export { AllImageStoreService }