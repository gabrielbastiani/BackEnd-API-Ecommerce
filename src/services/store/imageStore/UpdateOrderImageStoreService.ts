import prismaClient from "../../../prisma";

interface ImageRequest {
    imageStore_id: string;
    order: number;
}

class UpdateOrderImageStoreService {
    async execute({ imageStore_id, order }: ImageRequest) {
        const images = await prismaClient.imageStore.update({
            where: {
                id: imageStore_id,
            },
            data: {
                order: Number(order),
            }
        })

        return images;

    }
}

export { UpdateOrderImageStoreService }