import prismaClient from "../../../prisma";

class AllTemplatesEmailsFreteOrderService {
    async execute() {
        const templatesAll = await prismaClient.templateFreteEmail.findMany({
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

export { AllTemplatesEmailsFreteOrderService }