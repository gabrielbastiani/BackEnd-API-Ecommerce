import prismaClient from "../../prisma";

class ListContactService {
    async execute() {
        const contact = await prismaClient.contact.findMany({
            include: {
                store: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return contact;
    }
}

export { ListContactService }