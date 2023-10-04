import prismaClient from "../../../prisma";

interface EmailRequest {
    slug_name_file_email: string;
}

class FindUniqueTemplateEmailAbandonedCartService {
    async execute({ slug_name_file_email }: EmailRequest) {
        const abandoned = await prismaClient.templateAbandonedCartEmail.findFirst({
            where: {
                slug_name_file_email: slug_name_file_email
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