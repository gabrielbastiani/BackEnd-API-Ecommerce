import prismaClient from "../../../prisma";

interface StoreRequest {
    institutionalText_id: string;
}

class DeleteInstitutionalTextService {
    async execute({ institutionalText_id }: StoreRequest) {
        const text = await prismaClient.institutionalText.delete({
            where: {
                id: institutionalText_id,
            }
        });

        return text;

    }
}

export { DeleteInstitutionalTextService }