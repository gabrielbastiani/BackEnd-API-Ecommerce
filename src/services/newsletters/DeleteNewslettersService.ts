import prismaClient from "../../prisma";

interface NewsRequest {
    newsletter_id: string;
}

class DeleteNewslettersService {
    async execute({ newsletter_id }: NewsRequest) {
        const newsletter = await prismaClient.newsletter.delete({
            where: {
                id: newsletter_id
            }
        })

        return newsletter;
    }

}

export { DeleteNewslettersService }