import prismaClient from "../../../prisma";

interface TextRequest {
    institutionalText_id: string;
    order: number;
}

class UpdateOrderInstitutionalTextService {
    async execute({ institutionalText_id, order }: TextRequest) {
        const text = await prismaClient.institutionalText.update({
            where: {
                id: institutionalText_id,
            },
            data: {
                order: Number(order)
            }
        })

        return text;

    }
}

export { UpdateOrderInstitutionalTextService }