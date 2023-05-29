import prismaClient from '../../prisma';

class PageListAllContactService {
    async execute(page = 1, limit = 99999) {

        const skip = limit * (page - 1);

        const contactAll = await prismaClient.contact.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                store: true,
            }
        });

        const contacts = await prismaClient.contact.findMany({
            include: {
                store: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        const data = {
            contacts,
            total: contactAll.length,
            total_pages: Math.ceil(contactAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllContactService }