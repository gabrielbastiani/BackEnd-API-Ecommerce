import prismaClient from "../../../prisma";

interface ImageRequest {
    imageStore_id: string;
    position: string;
    slugPosition: string;
}

class UpdatePositionImageStoreService {
    async execute({ imageStore_id, position }: ImageRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const images = await prismaClient.imageStore.update({
            where: {
                id: imageStore_id,
            },
            data: {
                position: position,
                slugPosition: removerAcentos(position)
            }
        })

        return images;

    }
}

export { UpdatePositionImageStoreService }