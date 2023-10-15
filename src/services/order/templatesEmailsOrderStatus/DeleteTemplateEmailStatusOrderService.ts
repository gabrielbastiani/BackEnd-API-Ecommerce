import prismaClient from "../../../prisma";

interface TemplateRequest {
    slug_name_file_email: string;
}

class DeleteTemplateEmailStatusOrderService {
    async execute({ slug_name_file_email }: TemplateRequest) {
        const template = await prismaClient.templateOrderEmail.deleteMany({
            where: {
                slug_name_file_email: slug_name_file_email
            }
        });

        return template;

    }
}

export { DeleteTemplateEmailStatusOrderService }