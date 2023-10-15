import prismaClient from "../../../prisma";

interface ConfigRequest {
    configAbandonedCart_id: string;
    time_send_email: number;
    time_in_hours: number;
    subject: string;
    code_cupom: string;
}

class UpdateDatasConfigAbandonedCartService {
    async execute({
        configAbandonedCart_id,
        time_send_email,
        time_in_hours,
        subject,
        code_cupom
    }: ConfigRequest) {
        const configUpdate = await prismaClient.configAbandonedCart.update({
            where: {
                id: configAbandonedCart_id
            },
            data: {
                time_send_email: time_send_email,
                time_in_hours: time_in_hours,
                subject: subject,
                code_cupom: code_cupom
            }
        })

        return configUpdate;

    }
}

export { UpdateDatasConfigAbandonedCartService }