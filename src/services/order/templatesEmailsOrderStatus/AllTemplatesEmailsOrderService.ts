import prismaClient from "../../../prisma";

class AllTemplatesEmailsOrderService {
    async execute() {
        const templatesAll = await prismaClient.templateOrderEmail.findMany({
            orderBy: {
                created_at: 'asc'
            },
            include: {
                store: true
            }
        });

        return templatesAll;

    }
}

export { AllTemplatesEmailsOrderService }