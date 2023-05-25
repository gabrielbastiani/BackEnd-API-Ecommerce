import prismaClient from "../../../prisma";

interface ImageRequest {
    imageStore_id: string;
}

class FindUniqueImageStoreService {
    async execute({ imageStore_id }: ImageRequest) {
        const findImage = await prismaClient.imageStore.findUnique({
            where: {
                id: imageStore_id
            }
        })
        return findImage;
    }
}

export { FindUniqueImageStoreService }