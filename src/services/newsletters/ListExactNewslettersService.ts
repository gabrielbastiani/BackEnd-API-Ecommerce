import prismaClient from '../../prisma';

class ListExactNewslettersService {
    async execute({ newsletter_id }) {
        const exactNews = await prismaClient.newsletter.findUnique({
            where: {
                id: String(newsletter_id)
            },
            include: {
                loja: true,
            },
        })
        return exactNews;
    }
}

export { ListExactNewslettersService }