import prismaClient from '../../../prisma';

interface TextRequest {
    institutionalText_id: string;
}

class FindUniqueInstitutionalTextService {
    async execute({ institutionalText_id }: TextRequest) {
        const exactTextos = await prismaClient.institutionalText.findUnique({
            where: {
                id: institutionalText_id
            }
        })
        return exactTextos;
    }
}

export { FindUniqueInstitutionalTextService }