import prismaClient from "../../../prisma";

class AllTemplatesEmailsAbandonedCartService {
    async execute() {
        const templatesAll = await prismaClient.templateAbandonedCartEmail.findMany({
            orderBy: {
                created_at: 'asc'
            },
            include: {
                configAbandonedCart: true,
                store: true
            }
        });

        return templatesAll;

    }
}

export { AllTemplatesEmailsAbandonedCartService }