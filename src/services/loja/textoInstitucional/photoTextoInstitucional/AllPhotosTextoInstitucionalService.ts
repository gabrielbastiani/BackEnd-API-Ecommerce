import prismaClient from '../../../../prisma';

class AllPhotosTextoInstitucionalService {
    async execute() {
        const allImagesTextos = await prismaClient.imageLoja.findMany();

        return allImagesTextos;

    }
}

export { AllPhotosTextoInstitucionalService }