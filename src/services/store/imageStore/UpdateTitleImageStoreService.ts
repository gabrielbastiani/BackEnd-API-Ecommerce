import prismaClient from "../../../prisma";

interface ImageRequest {
    imageStore_id: string;
    titleImage: string;
}

class UpdateTitleImageStoreService {
    async execute({ imageStore_id, titleImage }: ImageRequest) {
        const images = await prismaClient.imageStore.update({
            where: {
                id: imageStore_id,
            },
            data: {
                titleImage: titleImage,
            }
        })

        return images;

    }
}

export { UpdateTitleImageStoreService }