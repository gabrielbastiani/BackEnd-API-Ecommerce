import prismaClient from "../../../prisma";

interface TemplateRequest {
    templateOrderEmail_id: string;
    status_order: string;
    subject: string;
}

class UpdateDatasTemplateEmailStatusService {
    async execute({
        templateOrderEmail_id,
        status_order,
        subject
    }: TemplateRequest) {
        const templateUpdate = await prismaClient.templateOrderEmail.update({
            where: {
                id: templateOrderEmail_id
            },
            data: {
                status_order: status_order,
                subject: subject
            }
        })

        return templateUpdate;

    }
}

export { UpdateDatasTemplateEmailStatusService }