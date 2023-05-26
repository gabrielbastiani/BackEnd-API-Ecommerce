import prismaClient from '../../../prisma';

interface DescriptionRequest {
    descriptionProduct_id: string;
}

class AllDescriptionsService {
    async execute({ descriptionProduct_id }: DescriptionRequest) {
        const allDescriptions = await prismaClient.descriptionProduct.findMany({
            where: {
                id: descriptionProduct_id
            },
            select: {
                id: true,
                description: true
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        return allDescriptions;

    }
}

export { AllDescriptionsService }