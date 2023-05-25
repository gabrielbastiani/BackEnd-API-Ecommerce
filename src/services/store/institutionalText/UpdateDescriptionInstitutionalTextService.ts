import prismaClient from "../../../prisma";

interface TextRequest {
    institutionalText_id: string;
    description: string;
}

class UpdateDescriptionInstitutionalTextService {
    async execute({ institutionalText_id, description }: TextRequest) {
        const text = await prismaClient.institutionalText.update({
            where: {
                id: institutionalText_id,
            },
            data: {
                description: description
            }
        })

        return text;

    }
}

export { UpdateDescriptionInstitutionalTextService }