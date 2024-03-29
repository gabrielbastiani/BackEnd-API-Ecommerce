import prismaClient from "../../prisma";

class ListNewslettersService {
    async execute() {
        const newsletter = await prismaClient.newsletter.findMany({
            include: {
                store: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return newsletter;
    }
}

export { ListNewslettersService }