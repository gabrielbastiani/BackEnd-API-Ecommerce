import { StatusImagemLoja } from '@prisma/client';
import prismaClient from '../../../../prisma';

interface ImagesInstitucional {
    slugPosicao: string;
}

class ListImagesInstitucionalService {
    async execute({ slugPosicao }: ImagesInstitucional) {
        const imagesInstitucional = await prismaClient.imageLoja.findMany({
            where: {
                slugPosicao: slugPosicao,
                disponibilidade: StatusImagemLoja.Disponivel,
                someImage: true
            },
            orderBy: {
                order: 'asc'
            }
        });

        return imagesInstitucional;

    }
}

export { ListImagesInstitucionalService }