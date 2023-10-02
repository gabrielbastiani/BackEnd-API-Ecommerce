import prismaClient from "../../../prisma";

interface ConfigRequest {
    configAbandonedCart_id: string;
    time_send_email: number;
    subject: string;
    code_cupom: string;
}

class UpdateDatasConfigAbandonedCartService {
    async execute({
        configAbandonedCart_id,
        time_send_email,
        subject,
        code_cupom
    }: ConfigRequest) {
        const configUpdate = await prismaClient.configAbandonedCart.update({
            where: {
                id: configAbandonedCart_id
            },
            data: {
                time_send_email: time_send_email,
                subject: subject,
                code_cupom: code_cupom
            }
        })

        return configUpdate;

    }
}

export { UpdateDatasConfigAbandonedCartService }