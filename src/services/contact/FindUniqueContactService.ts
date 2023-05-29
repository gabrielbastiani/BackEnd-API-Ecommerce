import prismaClient from '../../prisma';

interface ContactRequest {
    contact_id: string;
}

class FindUniqueContactService {
    async execute({ contact_id }: ContactRequest) {
        const exactContact = await prismaClient.contact.findUnique({
            where: {
                id: contact_id
            },
            include: {
                store: true,
            },
        })
        return exactContact;
    }
}

export { FindUniqueContactService }