import prismaClient from "../../../prisma";

interface EmailRequest {
    slug_name_file_email: string;
}

class FindUniqueTemplateEmailStatusOrderService {
    async execute({ slug_name_file_email }: EmailRequest) {
        const abandoned = await prismaClient.templateOrderEmail.findFirst({
            where: {
                slug_name_file_email: slug_name_file_email
            },
            include: {
                store: true
            }
        });

        return abandoned;

    }
}

export { FindUniqueTemplateEmailStatusOrderService }