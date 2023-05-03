import prismaClient from '../../../../prisma';

interface imagesRequest {
    groupFilterAtributo_id: string;
}

class AllImageFiltroAtributoGrupoService {
    async execute({ groupFilterAtributo_id }: imagesRequest) {
        const allImages = await prismaClient.imageAtributoGroup.findMany({
            where: {
                groupFilterAtributo_id: groupFilterAtributo_id
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        return allImages;

    }
}

export { AllImageFiltroAtributoGrupoService }