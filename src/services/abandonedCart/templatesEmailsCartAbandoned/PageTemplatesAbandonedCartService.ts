import prismaClient from "../../../prisma";

class PageTemplatesAbandonedCartService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const allTemplates = await prismaClient.templateAbandonedCartEmail.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const templates = await prismaClient.templateAbandonedCartEmail.findMany({
            orderBy: {
                created_at: 'desc'
            },
            skip,
            take: limit
        });

        const data = {
            templates,
            total: allTemplates.length,
            total_pages: Math.ceil(allTemplates.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageTemplatesAbandonedCartService }