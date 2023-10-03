import prismaClient from "../../../prisma";

interface EmailRequest {
    templateAbandonedCartEmail_id: string;
}

class FindUniqueTemplateEmailAbandonedCartService {
    async execute({ templateAbandonedCartEmail_id }: EmailRequest) {
        const abandoned = await prismaClient.templateAbandonedCartEmail.findUnique({
            where: {
                id: templateAbandonedCartEmail_id
            },
            include: {
                configAbandonedCart: true,
                store: true
            }
        });

        return abandoned;

    }
}

export { FindUniqueTemplateEmailAbandonedCartService }