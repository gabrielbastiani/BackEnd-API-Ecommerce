import prismaClient from '../../prisma';

interface AvalientionRequest {
    avalietion_id: string;
}

class FindUniqueAvalietionService {
    async execute({ avalietion_id }: AvalientionRequest) {
        const findAvalietion = await prismaClient.avalietion.findUnique({
            where: {
                id: avalietion_id
            },
            include: {
                customer: true,
                product: true,
                store: true
            }
        });

        return findAvalietion;

    }
}

export { FindUniqueAvalietionService }