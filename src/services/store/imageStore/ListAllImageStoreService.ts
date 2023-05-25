import { StatusImageStore } from "@prisma/client";
import prismaClient from "../../../prisma";

interface ImageRequest {
    slugPosition: string;
}

class ListAllImageStoreService {
    async execute({ slugPosition }: ImageRequest) {
        const images = await prismaClient.imageStore.findMany({
            where: {
                slugPosition: slugPosition,
                status: StatusImageStore.Disponivel
            },
            orderBy: {
                order: 'asc'
            }
        });

        return images;

    }
}

export { ListAllImageStoreService }