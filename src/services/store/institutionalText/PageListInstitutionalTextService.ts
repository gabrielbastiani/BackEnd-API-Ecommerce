import prismaClient from '../../../prisma';

class PageListInstitutionalTextService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allText = await prismaClient.institutionalText.findMany({
            orderBy: {
                order: 'asc'
            }
        });

        const text = await prismaClient.institutionalText.findMany({
            skip,
            take: limit,
            orderBy: {
                order: 'asc'
            }
        });

        const data = {
            text,
            total: allText.length,
            total_pages: Math.ceil(allText.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListInstitutionalTextService }