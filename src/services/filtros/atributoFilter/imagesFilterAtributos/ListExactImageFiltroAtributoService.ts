import prismaClient from '../../../../prisma';

interface FiltroAtributoRequest {
    imageFilterAtributo_id: string;
}

class ListExactImageFiltroAtributoService {
    async execute({ imageFilterAtributo_id }: FiltroAtributoRequest) {
        const exactImage = await prismaClient.imageFilterAtributo.findUnique({
            where: {
                id: imageFilterAtributo_id
            }
        });

        return exactImage;

    }
}

export { ListExactImageFiltroAtributoService }