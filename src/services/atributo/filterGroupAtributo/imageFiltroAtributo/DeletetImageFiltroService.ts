import prismaClient from '../../../../prisma';

interface ImageCategRrequest {
    imageAtributoGroup_id: string;
}

class DeletetImageFiltroService {
    async execute({ imageAtributoGroup_id }: ImageCategRrequest) {
        const exactImage = await prismaClient.imageAtributoGroup.delete({
            where: {
                id: imageAtributoGroup_id
            }
        });

        return exactImage;

    }
}

export { DeletetImageFiltroService }