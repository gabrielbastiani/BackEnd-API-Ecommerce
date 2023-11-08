import prismaClient from "../../../prisma";

interface TemplateRequest {
    templateOrderEmail_id: string;
    status_frete: string;
    subject: string;
}

class UpdateDatasTemplateEmailFreteStatusService {
    async execute({
        templateOrderEmail_id,
        status_frete,
        subject
    }: TemplateRequest) {
        const templateUpdate = await prismaClient.templateFreteEmail.update({
            where: {
                id: templateOrderEmail_id
            },
            data: {
                status_frete: status_frete,
                subject: subject
            }
        })

        return templateUpdate;

    }
}

export { UpdateDatasTemplateEmailFreteStatusService }