import prismaClient from "../../prisma";

interface ContactRequest {
    contact_id: string;
}

class DeleteContactService {
    async execute({ contact_id }: ContactRequest) {
        const contact = await prismaClient.contact.delete({
            where: {
                id: contact_id
            }
        })

        return contact;
    }

}

export { DeleteContactService }