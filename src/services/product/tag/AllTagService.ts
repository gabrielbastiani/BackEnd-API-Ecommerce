import prismaClient from '../../../prisma';

class AllTagService {
    async execute() {
        const allTags = await prismaClient.tag.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        return allTags;

    }
}

export { AllTagService }