import prismaClient from '../../../../prisma';

interface RequestTexto {
    imageloja_id: string;
}

class ListExactPhotoTextoService {
    async execute({ imageloja_id }: RequestTexto) {
        const exactImageTexto = await prismaClient.imageLoja.findUnique({
            where: {
                id: imageloja_id
            }
        })
        return exactImageTexto;
    }
}

export { ListExactPhotoTextoService }