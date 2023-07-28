import prismaClient from "../../../../prisma";

interface PhotoVariationRequest {
    photoVariation_id: string;
}

class FindUniqueImageVariationService {
    async execute({ photoVariation_id }: PhotoVariationRequest) {
        const find = await prismaClient.photoVariation.findMany({
            where: {
                id: photoVariation_id
            }
        });

        return find;

    }
}

export { FindUniqueImageVariationService }