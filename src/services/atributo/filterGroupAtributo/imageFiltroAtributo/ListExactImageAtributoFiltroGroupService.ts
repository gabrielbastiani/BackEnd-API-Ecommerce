import prismaClient from '../../../../prisma';

interface ImageCategRrequest {
    imageAtributoGroup_id: string;
}

class ListExactImageAtributoFiltroGroupService {
    async execute({ imageAtributoGroup_id }: ImageCategRrequest) {
        const exactImage = await prismaClient.imageAtributoGroup.findUnique({
            where: {
                id: imageAtributoGroup_id
            }
        });

        return exactImage;

    }
}

export { ListExactImageAtributoFiltroGroupService }