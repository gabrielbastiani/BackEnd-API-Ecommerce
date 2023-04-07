import prismaClient from '../../../../prisma';

class AllPhotosTextoInstitucionalService {
    async execute() {
        const someImagens = await prismaClient.imageLoja.findMany({
            where: {
                someImage: true
            },
            orderBy: {
                order: 'asc'
            }
        });

        return someImagens;

    }
}

export { AllPhotosTextoInstitucionalService }