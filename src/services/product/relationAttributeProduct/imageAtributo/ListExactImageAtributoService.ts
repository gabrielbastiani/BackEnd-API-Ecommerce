import prismaClient from '../../../prisma';

interface ImageCategRrequest {
    imageAtributo_id: string;
}

class ListExactImageAtributoService {
    async execute({ imageAtributo_id }: ImageCategRrequest) {
        const exactImage = await prismaClient.imageAtributo.findUnique({
            where: {
                id: imageAtributo_id
            }
        });

        return exactImage;

    }
}

export { ListExactImageAtributoService }